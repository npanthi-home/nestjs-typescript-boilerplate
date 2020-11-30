import BaseContext from '../base/BaseContext';
import FruitContext from '../common/fruit/FruitContext';
import UserContext from '../common/user/UserContext';
import CountOneToHundredAsGuest from './CountOneToHundredAsGuest';
import LetUserHaveFruit from './LetUserHaveFruit';

export default class UseCaseContext {
  private base: BaseContext;
  private user: UserContext;
  private fruit: FruitContext;

  countOneToHundredAsGuest: CountOneToHundredAsGuest;
  letUserHaveFruit: LetUserHaveFruit;

  constructor({ user, base, fruit }) {
    this.base = base;
    this.user = user;
    this.fruit = fruit;
    this.countOneToHundredAsGuest = new CountOneToHundredAsGuest({
      userService: this.user.userService,
    });
    this.letUserHaveFruit = new LetUserHaveFruit({
      userService: this.user.userService,
      fruitService: this.fruit.service,
    });
  }
}
