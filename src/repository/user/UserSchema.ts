import { SchemaFactory } from '@nestjs/mongoose';
import UserEntity from './UserEntity';

const UserSchema = SchemaFactory.createForClass(UserEntity);

export default UserSchema;
