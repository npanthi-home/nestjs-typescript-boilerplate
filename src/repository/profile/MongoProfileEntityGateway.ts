import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Profile from '../../core/common/profile/Profile';
import ProfileEntityGateway from '../../core/common/profile/ProfileEntityGateway';
import { ProfileDocument } from './ProfileDocument';
import ProfileDocumentMapper from './ProfileDocumentMapper';
import ProfileEntity from './ProfileEntity';

@Injectable()
export default class MongoProfileEntityGateway implements ProfileEntityGateway {
  constructor(
    @InjectModel(ProfileEntity.name) private model: Model<ProfileDocument>,
    @Inject() private mapper: ProfileDocumentMapper,
  ) {}

  async save(profile: Profile) {
    const profileDocument = await this.mapper.to(profile);
    const savedProfile = await profileDocument.save();
    return savedProfile;
  }

  async fetch(username: string) {
    const profileDocument = await this.model.find({ username });
    return await this.mapper.from(profileDocument[0]);
  }
}
