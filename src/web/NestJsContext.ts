import MongoUserEntityGateway from 'src/repository/user/MongoUserEntityGateway';
import BaseContext from '../core/base/BaseContext';
import UserContext from '../core/common/user/UserContext';
import ContextBuilder from '../core/context/ContextBuilder';
import UseCaseContext from '../core/usecase/UseCaseContext';
import ConsoleLogger from '../utils/ConsoleLogger';

export default {
  provide: 'Core',
  useFactory: (
    userEntityGateway: MongoUserEntityGateway,
    logger: ConsoleLogger,
  ) => {
    const baseContext: BaseContext = new BaseContext({ logger });
    const userContext: UserContext = new UserContext(
      { entityGateway: userEntityGateway },
      baseContext,
    );
    const useCaseContext: UseCaseContext = new UseCaseContext({
      base: baseContext,
      user: userContext,
    });

    return new ContextBuilder()
      .setBaseContext(baseContext)
      .setUserContext(userContext)
      .setUseCaseContext(useCaseContext)
      .build();
  },
  inject: [MongoUserEntityGateway, ConsoleLogger],
};
