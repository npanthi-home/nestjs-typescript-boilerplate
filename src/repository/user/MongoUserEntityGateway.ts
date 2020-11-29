import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import User from 'src/core/common/user/User';
import Mapper from 'src/core/interface/Mapper';
import UserEntityGateway from '../../core/common/user/UserEntityGateway';
import { UserDocument } from './UserDocument';
import UserDocumentMapper from './UserDocumentMapper';
import UserEntity from './UserEntity';
import MongoCrudEntityGateway from '../base/MongoCrudEntityGateway';

@Injectable()
export default class MongoUserEntityGateway
  extends MongoCrudEntityGateway<User, UserDocument>
  implements UserEntityGateway {
  constructor(
    @InjectModel(UserEntity.name) model: Model<UserDocument>,
    @Inject(UserDocumentMapper.name) mapper: Mapper<User, UserDocument>,
  ) {
    super(model, mapper);
  }
}
