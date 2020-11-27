import { Module } from '@nestjs/common';
import { RepositoryModule } from '../repository/repository.module';
import NextJsContext from './NestJsContext';
import ProfileController from './profile/ProfileController';
import { UserController } from './user/UserController';
import UserWebDtoMapper from './user/UserWebDtoMapper';

@Module({
  imports: [RepositoryModule],
  controllers: [UserController, ProfileController],
  providers: [UserWebDtoMapper, NextJsContext],
})
export class WebModule {}
