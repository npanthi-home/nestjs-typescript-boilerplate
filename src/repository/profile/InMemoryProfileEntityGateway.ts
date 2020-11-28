import { Injectable } from '@nestjs/common';
import ProfileEntityGateway from '../../core/common/profile/ProfileEntityGateway';
import Profile from '../../core/common/profile/Profile';
import { NullProfile } from '../../core/common/profile/Profile';

@Injectable()
export default class InMemoryProfileEntityGateway
  implements ProfileEntityGateway {
  storage: Map<string, Profile>;

  constructor() {
    this.storage = new Map();
  }

  async save(profile: Profile) {
    this.storage.set(profile.username, profile);
    return Promise.resolve(profile);
  }

  async fetch(username: string) {
    return Promise.resolve(this.storage.get(username) || NullProfile);
  }
}
