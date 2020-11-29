import BaseContext from '../base/BaseContext';
import UserContext from '../common/user/UserContext';
import UseCaseContext from '../usecase/UseCaseContext';

export default class Context {
  user: UserContext;
  base: BaseContext;
  useCase: UseCaseContext;

  constructor({ base, user, useCase }) {
    this.base = base;
    this.user = user;
    this.useCase = useCase;
  }
}
