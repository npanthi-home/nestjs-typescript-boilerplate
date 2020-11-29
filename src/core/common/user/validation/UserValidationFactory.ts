import IsAdmin from './IsAdmin';
import ValidationFactory from 'src/core/validation/generic/ValidationFactory';
import ValidationMetadata, {
  create,
} from 'src/core/validation/ValidationMetadata';

export default class UserValidationFactory extends ValidationFactory {
  static factoryName = 'User';
  constructor() {
    super();
    this.validations.set(UserValidations.IsAdmin.type, new IsAdmin());
  }
}

const createMetadata = create(UserValidationFactory.factoryName);

export class UserValidations {
  static IsAdmin: ValidationMetadata = createMetadata('IsAdmin');
}
