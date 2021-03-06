import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes as Codes } from 'http-status-codes';
import LetUserHaveFruit from 'src/core/usecase/LetUserHaveFruit';
import NotFoundError from '../../core/common/error/types/NotFoundError';
import UnauthorizedError from '../../core/common/error/types/UnauthorizedError';
import UserService from '../../core/common/user/UserService';
import Context from '../../core/context/Context';
import CountOneToHundredAsGuest from '../../core/usecase/CountOneToHundredAsGuest';
import { compose } from '../../core/utils/compose';
import { buildError } from '../response/builder';
import UserWebDto from './UserWebDto';
import UserWebDtoMapper from './UserWebDtoMapper';

@Controller('/user')
export class UserController {
  service: UserService;
  countOneToHundredAsGuest: CountOneToHundredAsGuest;
  letUserHaveFruit: LetUserHaveFruit;

  constructor(
    @Inject('Core') core: Context,
    @Inject(UserWebDtoMapper.name) private mapper: UserWebDtoMapper,
  ) {
    this.service = core.user.userService;
    this.countOneToHundredAsGuest = core.useCase.countOneToHundredAsGuest;
    this.letUserHaveFruit = core.useCase.letUserHaveFruit;
  }

  @Get('/countrequest')
  async count() {
    await this.countOneToHundredAsGuest.run();
    return 'done';
  }

  @Get('/haveFruit/user/:username/fruit/:fruitName')
  async haveFruit(
    @Param('username') username: string,
    @Param('fruitName') fruitName: string,
  ) {
    return this.letUserHaveFruit.consume({
      username,
      fruitName,
    });
  }

  @Get('/:username')
  async get(@Param('username') username: string) {
    const users = await this.service.find('username', username);
    return await this.mapper.toArray(users);
  }

  @Post()
  async create(@Body() user: UserWebDto) {
    try {
      const savedUser = await this.unsafeCreate(user);
      return savedUser;
    } catch (error) {
      return compose(
        buildError(UnauthorizedError.name)(Codes.UNAUTHORIZED),
        buildError(NotFoundError.name)(Codes.NOT_FOUND),
        buildError(Error.name)(Codes.BAD_REQUEST),
      )(error);
    }
  }

  private async unsafeCreate(userDto: UserWebDto) {
    const user = await this.mapper.from(userDto);
    const savedUser = await this.service.save(user);
    return await this.mapper.to(savedUser);
  }

  @Put()
  async update(@Body() user: UserWebDto) {
    const updatedUser = await this.service.replace(
      'username',
      user.username,
      await this.mapper.from(user),
    );
    return await this.mapper.to(updatedUser);
  }

  @Delete('/:username')
  async delete(@Param('username') username) {
    return await this.service.delete('username', username);
  }
}
