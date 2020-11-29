import { Injectable } from '@nestjs/common';
import UserEntityGateway from 'src/core/common/user/UserEntityGateway';
import User from '../../core/common/user/User';
import InMemoryCrudEntityGateway from '../base/InMemoryCrudEntityGateway';

@Injectable()
export default class InMemoryUserEntityGateway
  extends InMemoryCrudEntityGateway<User>
  implements UserEntityGateway {
  constructor() {
    super('username');
  }
}
