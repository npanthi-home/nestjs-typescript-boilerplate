import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export default class FruitEntity {
  @Prop({ required: true, unique: true })
  name: string;
}
