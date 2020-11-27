import CrudService from '../../base/CrudService';
import { compose } from '../../utils/compose';
import { GenericValidations } from '../../validation/generic/ValidationFactory';
import { UserValidations } from '../../validation/user/UserValidationFactory';
import { validate, validateWith } from '../../validation/validate';
import AfterMethod from '../decorators/method/AfterMethod';
import BeforeMethod from '../decorators/method/BeforeMethod';
import Logger from '../Logger';
import User from './User';
import UserEntityGateway from './UserEntityGateway';

export default class UserService implements CrudService<User, string> {
  gateway: UserEntityGateway;
  logger: Logger;

  constructor({ entityGateway: gateway, logger }) {
    this.gateway = gateway;
    this.logger = logger;
  }

  @BeforeMethod((user: User) =>
    compose(
      validateWith(GenericValidations.DoFieldsExist)('username', 'email'),
      validate(UserValidations.IsAdmin),
    )(user),
  )
  @AfterMethod((user: User) => console.log('AfterMethod', user))
  async create(user: User) {
    return await this.gateway.create(user);
  }

  async get(username: string) {
    return await this.gateway.get(username);
  }

  async delete(username: string) {
    return await this.gateway.delete(username);
  }

  async update(user: User) {
    return await this.gateway.update(user);
  }
}
