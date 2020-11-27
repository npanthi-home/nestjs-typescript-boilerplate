import { Injectable } from '@nestjs/common';
import Mapper from '../../core/interface/Mapper';
import User from '../../core/common/user/User';
import UserWebDto from './UserWebDto';

@Injectable()
export default class UserWebDtoMapper implements Mapper<User, UserWebDto> {
  async to(model: User) {
    const { username, email, firstName, lastName } = model;
    return {
      username,
      email,
      firstName,
      lastName,
    };
  }

  async from(dto: UserWebDto) {
    const { username, email, firstName, lastName, isAdmin } = dto;
    return {
      username,
      email,
      firstName,
      lastName,
      isAdmin,
    };
  }
}
