import BaseContext from '../core/base/BaseContext';
import ProfileContext from '../core/common/profile/ProfileContext';
import UserContext from '../core/common/user/UserContext';
import ContextBuilder from '../core/context/ContextBuilder';
import UseCaseContext from '../core/usecase/UseCaseContext';
import MongoProfileEntityGateway from '../repository/profile/MongoProfileEntityGateway';
import InMemoryUserEntityGateway from '../repository/user/InMemoryUserEntityGateway';
import ConsoleLogger from '../utils/ConsoleLogger';

export default {
  provide: 'Core',
  useFactory: (
    userEntityGateway: InMemoryUserEntityGateway,
    profileEntityGateway: MongoProfileEntityGateway,
    logger: ConsoleLogger,
  ) => {
    const baseContext: BaseContext = new BaseContext({ logger });
    const userContext: UserContext = new UserContext(
      { entityGateway: userEntityGateway },
      baseContext,
    );
    const profileContext: ProfileContext = new ProfileContext(
      { entityGateway: profileEntityGateway },
      baseContext,
    );
    const useCaseContext: UseCaseContext = new UseCaseContext({
      base: baseContext,
      user: userContext,
      profile: profileContext,
    });

    return new ContextBuilder()
      .setBaseContext(baseContext)
      .setUserContext(userContext)
      .setProfileContext(profileContext)
      .setUseCaseContext(useCaseContext)
      .build();
  },
  inject: [InMemoryUserEntityGateway, MongoProfileEntityGateway, ConsoleLogger],
};
