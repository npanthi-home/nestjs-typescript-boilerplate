import BaseContext from '../base/BaseContext';
import ProfileContext from '../common/profile/ProfileContext';
import UserContext from '../common/user/UserContext';
import UseCaseContext from '../usecase/UseCaseContext';

export default class Context {
  profile: ProfileContext;
  user: UserContext;
  base: BaseContext;
  useCase: UseCaseContext;

  constructor({ base, user, profile, useCase }) {
    this.base = base;
    this.user = user;
    this.profile = profile;
    this.useCase = useCase;
  }
}
