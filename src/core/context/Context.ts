import BaseContext from '../base/BaseContext';
import UserContext from '../common/user/UserContext';
import UseCaseContext from '../usecase/UseCaseContext';
import FruitContext from '../common/fruit/FruitContext';

export default class Context {
  user: UserContext;
  base: BaseContext;
  fruit: FruitContext;
  useCase: UseCaseContext;

  constructor({ base, user, fruit, useCase }) {
    this.base = base;
    this.user = user;
    this.fruit = fruit;
    this.useCase = useCase;
  }
}
