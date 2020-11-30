import Mapper from 'src/core/interface/Mapper';
import Fruit from '../../core/common/fruit/Fruit';
import { FruitDocument } from './FruitDocument';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import FruitEntity from './FruitEntity';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class FruitDocumentMapper extends Mapper<Fruit, FruitDocument> {
  constructor(
    @InjectModel(FruitEntity.name) private model: Model<FruitDocument>,
  ) {
    super();
  }

  async to(coreModel: Fruit): Promise<FruitDocument> {
    return await this.model.create({
      name: coreModel.name,
    });
  }

  async from(dto: FruitDocument): Promise<Fruit> {
    return {
      name: dto.name,
    };
  }
}
