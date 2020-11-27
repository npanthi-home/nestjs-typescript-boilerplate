import Logger from '../common/Logger';

export default class BaseContext {
  logger: Logger;

  constructor({ logger }) {
    this.logger = logger;
  }
}
