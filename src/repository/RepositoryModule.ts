import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MongoUserEntityGateway from './user/MongoUserEntityGateway';
import UserDocumentMapper from './user/UserDocumentMapper';
import UserEntity from './user/UserEntity';
import UserSchema from './user/UserSchema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://npanthi:secret@localhost:27017/test', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  providers: [MongoUserEntityGateway, UserDocumentMapper],
  exports: [MongoUserEntityGateway],
})
export class RepositoryModule {}
