import ProfileService from './ProfileService';
import ProfileEntityGateway from './ProfileEntityGateway';
export default class ProfileContext {
  profileEntityGateway: ProfileEntityGateway;
  profileService: ProfileService;

  constructor({ entityGateway }, { logger }) {
    this.profileEntityGateway = entityGateway;
    this.profileService = new ProfileService({ entityGateway });
  }
}
