import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import User from 'src/core/common/user/User';
import Mapper from '../../core/interface/Mapper';
import Roles from './Roles';
import { UserDocument } from './UserDocument';
import UserEntity from './UserEntity';

@Injectable()
export default class UserDocumentMapper extends Mapper<User, UserDocument> {
  constructor(
    @InjectModel(UserEntity.name) private model: Model<UserDocument>,
  ) {
    super();
  }

  async to(user: User) {
    return await this.model.create({
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.isAdmin ? Roles.ADMIN : Roles.USER,
    });
  }

  async from(userDocument: UserDocument) {
    return {
      username: userDocument.username,
      email: userDocument.email,
      firstName: userDocument.firstName,
      lastName: userDocument.lastName,
      isAdmin: userDocument.role === Roles.ADMIN,
    };
  }
}
