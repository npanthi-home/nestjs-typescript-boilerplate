import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,

  Param,
  Post,
  Put
} from '@nestjs/common';
import { StatusCodes as Codes } from 'http-status-codes';
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

  constructor(
    @Inject('Core') core: Context,
    @Inject(UserWebDtoMapper.name) private mapper: UserWebDtoMapper,
  ) {
    this.service = core.user.userService;
    this.countOneToHundredAsGuest = core.useCase.countOneToHundredAsGuest;
  }

  @Get('/countrequest')
  async count() {
    await this.countOneToHundredAsGuest.run();
    return 'done';
  }

  @Get('/:username')
  async get(@Param('username') username: string) {
    const user = await this.service.get(username);
    return await this.mapper.to(user);
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
    const savedUser = await this.service.create(user);
    return await this.mapper.to(savedUser);
  }

  @Put()
  async update(@Body() user: UserWebDto) {
    const updatedUser = await this.service.update(await this.mapper.from(user));
    return await this.mapper.to(updatedUser);
  }

  @Delete('/:username')
  async delete(@Param('username') username) {
    const user = await this.service.delete(username);
    return await this.mapper.to(user);
  }
}
