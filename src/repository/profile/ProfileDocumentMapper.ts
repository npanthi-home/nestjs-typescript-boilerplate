import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Mapper from '../../core/interface/Mapper';
import Profile from '../../core/common/profile/Profile';
import { ProfileEntity } from './ProfileSchema';
import { ProfileDocument } from './ProfileDocument';

@Injectable()
export default class ProfileDocumentMapper
  implements Mapper<Profile, ProfileDocument> {

  constructor(
    @InjectModel(ProfileEntity.name) private model: Model<ProfileDocument>,
  ) {}

  async to(profile: Profile) {
    return await this.model.create(profile);
  }

  async from(profileDocument: ProfileDocument) {
    return {
      username: profileDocument.username,
    };
  }
}
