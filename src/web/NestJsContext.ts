import MongoUserEntityGateway from 'src/repository/user/MongoUserEntityGateway';
import BaseContext from '../core/base/BaseContext';
import UserContext from '../core/common/user/UserContext';
import ContextBuilder from '../core/context/ContextBuilder';
import UseCaseContext from '../core/usecase/UseCaseContext';
import ConsoleLogger from '../utils/ConsoleLogger';
import FruitContext from '../core/common/fruit/FruitContext';
import MongoFruitEntityGateway from 'src/repository/fruit/MongoFruitEntityGatway';

export default {
  provide: 'Core',
  useFactory: (
    userEntityGateway: MongoUserEntityGateway,
    fruitEntityGateway: MongoFruitEntityGateway,
    logger: ConsoleLogger,
  ) => {
    const baseContext: BaseContext = new BaseContext({ logger });
    const userContext: UserContext = new UserContext(
      { entityGateway: userEntityGateway },
      baseContext,
    );
    const fruitContext: FruitContext = new FruitContext({
      entityGateway: fruitEntityGateway,
    });
    const useCaseContext: UseCaseContext = new UseCaseContext({
      base: baseContext,
      user: userContext,
      fruit: fruitContext,
    });

    return new ContextBuilder()
      .setBaseContext(baseContext)
      .setUserContext(userContext)
      .setFruitContext(fruitContext)
      .setUseCaseContext(useCaseContext)
      .build();
  },
  inject: [MongoUserEntityGateway, MongoFruitEntityGateway, ConsoleLogger],
};
