import BaseContext from '../base/BaseContext';
import UserContext from '../common/user/UserContext';
import UseCaseContext from '../usecase/UseCaseContext';
import Context from './Context';

export default class ContextBuilder {
  user: UserContext;
  base: BaseContext;
  useCase: UseCaseContext;

  setUserContext(context: UserContext) {
    this.user = context;
    return this;
  }

  setUseCaseContext(context: UseCaseContext) {
    this.useCase = context;
    return this;
  }

  setBaseContext(context: BaseContext) {
    this.base = context;
    return this;
  }

  build() {
    return new Context({
      base: this.base,
      user: this.user,
      useCase: this.useCase,
    });
  }
}
