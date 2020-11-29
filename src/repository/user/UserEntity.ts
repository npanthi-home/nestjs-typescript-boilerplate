import { Prop, Schema } from '@nestjs/mongoose';
import Roles from './Roles';
@Schema()
export default class UserEntity {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop({ required: true, default: Roles.USER })
  role: string;
}
