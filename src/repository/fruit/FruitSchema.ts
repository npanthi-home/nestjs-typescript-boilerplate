import { SchemaFactory } from '@nestjs/mongoose';
import FruitEntity from './FruitEntity';
const FruitSchema = SchemaFactory.createForClass(FruitEntity);

export default FruitSchema;
