import { Module } from '@nestjs/common';
import ConsoleLogger from 'src/utils/ConsoleLogger';
import { RepositoryModule } from '../repository/RepositoryModule';
import NextJsContext from './NestJsContext';

@Module({
  imports: [RepositoryModule],
  controllers: [],
  providers: [NextJsContext, ConsoleLogger],
  exports: [NextJsContext],
})
export class CoreModule {}
