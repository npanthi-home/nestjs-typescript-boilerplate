import { Injectable } from '@nestjs/common';
import Logger from '../core/common/Logger';

@Injectable()
export default class ConsoleLogger implements Logger {
  info(statement: string) {
    console.log('ConsoleLogger:' + statement);
    return statement;
  }

  debug(statement: string) {
    console.log(statement);
    return statement;
  }

  error(statement: string) {
    console.error(statement);
    return statement;
  }

  warn(statement: string) {
    console.warn(statement);
    return statement;
  }
}
