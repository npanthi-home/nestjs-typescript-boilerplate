import BaseContext from '../base/BaseContext';
import UserContext from '../common/user/UserContext';
import UseCaseContext from '../usecase/UseCaseContext';
import Context from './Context';
import FruitContext from '../common/fruit/FruitContext';

export default class ContextBuilder {
  user: UserContext;
  base: BaseContext;
  fruit: FruitContext;
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

  setFruitContext(context: FruitContext) {
    this.fruit = context;
    return this;
  }

  build() {
    return new Context({
      base: this.base,
      user: this.user,
      fruit: this.fruit,
      useCase: this.useCase,
    });
  }
}
