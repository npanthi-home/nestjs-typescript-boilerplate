import User from 'src/core/common/user/User';
import CrudOperations from 'src/core/base/CrudOperations';

export default interface UserEntityGateway extends CrudOperations<User> {}
