import Profile from "./Profile";

export default interface ProfileEntityGateway {
    save:(profile: Profile) => Promise<Profile>;
    fetch:(username: string) => Promise<Profile>;
}