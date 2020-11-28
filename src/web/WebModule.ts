import { Module } from '@nestjs/common';
import ConsoleLogger from 'src/utils/ConsoleLogger';
import { CoreModule } from './CoreModule';
import ProfileController from './profile/ProfileController';
import { UserController } from './user/UserController';
import UserWebDtoMapper from './user/UserWebDtoMapper';

@Module({
  imports: [CoreModule],
  controllers: [UserController, ProfileController],
  providers: [UserWebDtoMapper, ConsoleLogger],
})
export class WebModule {}
