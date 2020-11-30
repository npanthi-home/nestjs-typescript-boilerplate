import { Module } from '@nestjs/common';
import ConsoleLogger from 'src/utils/ConsoleLogger';
import { CoreModule } from './CoreModule';
import FruitController from './fruit/FruitController';
import { UserController } from './user/UserController';
import UserWebDtoMapper from './user/UserWebDtoMapper';

@Module({
  imports: [CoreModule],
  controllers: [UserController, FruitController],
  providers: [UserWebDtoMapper, ConsoleLogger],
})
export class WebModule {}
