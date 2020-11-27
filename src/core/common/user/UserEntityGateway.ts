import User from './User';

export default interface UserEntityGateway {
  create: (user: User) => Promise<User>;
  get: (username: string) => Promise<User>;
  delete: (username: string) => Promise<User>;
  update: (user: User) => Promise<User>;
}
