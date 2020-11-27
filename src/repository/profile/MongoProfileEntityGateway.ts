import ProfileEntityGateway from '../../core/common/profile/ProfileEntityGateway';
import Profile from '../../core/common/profile/Profile';
import Mapper from '../../core/interface/Mapper';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProfileEntity } from './ProfileSchema';
import { Model } from 'mongoose';
import { ProfileDocument } from './ProfileDocument';

@Injectable()
export default class MongoProfileEntityGateway implements ProfileEntityGateway {
  mapper: Mapper<Profile, ProfileDocument>;

  constructor(
    @InjectModel(ProfileEntity.name) private model: Model<ProfileDocument>,
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
