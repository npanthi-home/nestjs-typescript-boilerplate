import { Prop, Schema } from '@nestjs/mongoose';
@Schema()
export default class ProfileEntity {
  @Prop({ required: true })
  username: string;
}
