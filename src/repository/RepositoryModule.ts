import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MongoProfileEntityGateway from './profile/MongoProfileEntityGateway';
import ProfileDocumentMapper from './profile/ProfileDocumentMapper';
import ProfileEntity from './profile/ProfileEntity';
import ProfileSchema from './profile/ProfileSchema';
import InMemoryUserEntityGateway from './user/InMemoryUserEntityGateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://npanthi:secret@localhost:27017/test', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([
      { name: ProfileEntity.name, schema: ProfileSchema },
    ]),
  ],
  providers: [
    InMemoryUserEntityGateway,
    MongoProfileEntityGateway,
    ProfileDocumentMapper,
  ],
  exports: [InMemoryUserEntityGateway, MongoProfileEntityGateway],
})
export class RepositoryModule {}
