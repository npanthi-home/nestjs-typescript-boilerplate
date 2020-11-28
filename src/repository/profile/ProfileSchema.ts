import { SchemaFactory } from '@nestjs/mongoose';
import ProfileEntity from './ProfileEntity';

const ProfileSchema = SchemaFactory.createForClass(ProfileEntity);

export default ProfileSchema;
