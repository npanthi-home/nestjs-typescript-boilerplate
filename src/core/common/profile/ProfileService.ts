import Profile from './Profile';
import ProfileEntityGateway from './ProfileEntityGateway';

export default class ProfileService {
  gateway: ProfileEntityGateway;

  constructor({ entityGateway }) {
    this.gateway = entityGateway;
  }

  create(profile: Profile) {
    return this.gateway.save(profile);
  }

  get(username: string) {
    return this.gateway.fetch(username);
  }
}
