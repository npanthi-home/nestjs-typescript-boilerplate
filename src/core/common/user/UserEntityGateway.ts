import User from './User';
import CrudGateway from '../../base/CrudGateway';

export default interface UserEntityGateway extends CrudGateway<User, string> {}
