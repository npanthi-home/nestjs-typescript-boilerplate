import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MongoUserEntityGateway from './user/MongoUserEntityGateway';
import UserDocumentMapper from './user/UserDocumentMapper';
import UserEntity from './user/UserEntity';
import UserSchema from './user/UserSchema';
import MongoFruitEntityGateway from 'src/repository/fruit/MongoFruitEntityGatway';
import FruitDocumentMapper from './fruit/FruitDocumentMapper';
import FruitSchema from './fruit/FruitSchema';
import FruitEntity from './fruit/FruitEntity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://npanthi:secret@localhost:27017/test', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([
      { name: UserEntity.name, schema: UserSchema },
      { name: FruitEntity.name, schema: FruitSchema },
    ]),
  ],
  providers: [
    MongoUserEntityGateway,
    UserDocumentMapper,
    MongoFruitEntityGateway,
    FruitDocumentMapper,
  ],
  exports: [MongoUserEntityGateway, MongoFruitEntityGateway],
})
export class RepositoryModule {}
