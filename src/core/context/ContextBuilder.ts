import UserContext from '../common/user/UserContext';
import BaseContext from '../base/BaseContext';
import ProfileContext from '../common/profile/ProfileContext';
import Context from './Context';
import UseCaseContext from '../usecase/UseCaseContext';

export default class ContextBuilder {
  profile: ProfileContext;
  user: UserContext;
  base: BaseContext;
  useCase: UseCaseContext;

  setUserContext(context: UserContext) {
    this.user = context;
    return this;
  }

  setProfileContext(context: ProfileContext) {
    this.profile = context;
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
      profile: this.profile,
      useCase: this.useCase,
    });
  }
}
