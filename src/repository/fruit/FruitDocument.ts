import FruitEntity from './FruitEntity';
import { Document } from 'mongoose';

export type FruitDocument = FruitEntity & Document;
