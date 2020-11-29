import BaseContext from '../base/BaseContext';
import UserContext from '../common/user/UserContext';
import CountOneToHundredAsGuest from './CountOneToHundredAsGuest';

export default class UseCaseContext {
  private base: BaseContext;
  private user: UserContext;

  countOneToHundredAsGuest: CountOneToHundredAsGuest;

  constructor({ user, base }) {
    this.base = base;
    this.user = user;
    this.countOneToHundredAsGuest = new CountOneToHundredAsGuest({
      userService: user.userService,
    });
  }
}
