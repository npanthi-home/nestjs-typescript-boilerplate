import { Document } from 'mongoose';
import UserEntity from './UserEntity';

export type UserDocument = UserEntity & Document;
