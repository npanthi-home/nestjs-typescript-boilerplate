import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProfileEntity {
  @Prop({ required: true })
  username: string;
}

export const ProfileSchema = SchemaFactory.createForClass(ProfileEntity);
