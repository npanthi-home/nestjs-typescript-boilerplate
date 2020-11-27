import UnauthorizedError from '../../common/error/types/UnauthorizedError';
import { Validation } from '../../../../dist/core/validation/Validation';
import User from '../../../../dist/core/common/user/User';

export interface IsAdminRequest {
  user: User;
}

export default class IsAdmin implements Validation<User, IsAdminRequest> {
  validate(request: IsAdminRequest) {
    if (!request.user.isAdmin) {
      throw new UnauthorizedError(
        `${request.user.username} is not authorized for this action.`,
      );
    }
  }

  buildRequest(entity: User) {
    return { user: entity };
  }
}
