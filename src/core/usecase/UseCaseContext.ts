import BaseContext from '../base/BaseContext';
import ProfileContext from '../common/profile/ProfileContext';
import UserContext from '../common/user/UserContext';
import CountOneToHundredAsGuest from './CountOneToHundredAsGuest';

export default class UseCaseContext {
  private base: BaseContext;
  private user: UserContext;
  private profile: ProfileContext;

  countOneToHundredAsGuest: CountOneToHundredAsGuest;

  constructor({ user, profile, base }) {
    this.base = base;
    this.user = user;
    this.profile = profile;
    this.countOneToHundredAsGuest = new CountOneToHundredAsGuest({
      userService: user.userService,
    });
  }
}
