import { Document } from "mongoose";
import Profile from '../../core/common/profile/Profile';

export type ProfileDocument = Profile & Document;