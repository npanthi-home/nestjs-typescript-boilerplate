import UserService from './UserService';
import UserEntityGateway from './UserEntityGateway';

export default class UserContext {
  userService: UserService;
  userEntityGateway: UserEntityGateway;

  constructor({ entityGateway }, { logger }) {
    this.userEntityGateway = entityGateway;
    this.userService = new UserService({ entityGateway, logger });
  }
}
