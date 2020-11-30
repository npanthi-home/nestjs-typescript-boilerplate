import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Fruit from '../../core/common/fruit/Fruit';
import MongoCrudEntityGateway from '../base/MongoCrudEntityGateway';
import { FruitDocument } from './FruitDocument';
import FruitEntity from './FruitEntity';
import Mapper from 'src/core/interface/Mapper';
import FruitEntityGateway from 'src/core/common/fruit/FruitEntityGateway';
import FruitDocumentMapper from './FruitDocumentMapper';

@Injectable()
export default class MongoFruitEntityGateway
  extends MongoCrudEntityGateway<Fruit, FruitDocument>
  implements FruitEntityGateway {
  constructor(
    @InjectModel(FruitEntity.name) model: Model<FruitDocument>,
    @Inject(FruitDocumentMapper.name) mapper: Mapper<Fruit, FruitDocument>,
  ) {
    super(model, mapper);
  }
}
