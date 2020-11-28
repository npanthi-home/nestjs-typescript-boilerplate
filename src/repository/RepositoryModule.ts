import { Module } from '@nestjs/common';
import MongoProfileEntityGateway from './profile/MongoProfileEntityGateway';
import InMemoryUserEntityGateway from './user/InMemoryUserEntityGateway';
import ProfileDocumentMapper from './profile/ProfileDocumentMapper';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema, ProfileEntity } from './profile/ProfileSchema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:CXthbK8X6jVRZzR@cluster0.vmlss.mongodb.net/nodets?retryWrites=true&w=majority',
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
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
