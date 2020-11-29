import { Document, Model } from 'mongoose';
import CrudOperations from 'src/core/base/CrudOperations';
import Mapper from 'src/core/interface/Mapper';

export default class MongoCrudEntityGateway<M, D extends Document>
  implements CrudOperations<M> {
  constructor(private model: Model<D>, private mapper: Mapper<M, D>) {}

  //   @BeforeMethod((coreModel) => this.mapper.to(coreModel))
  //   @AfterMethod((document) => this.mapper.from(document))
  async save(coreModel: M) {
    const document = await this.mapper.to(coreModel);
    const savedDocument = await document.save();
    return await this.mapper.from(savedDocument);
  }

  async saveAll(coreModels: M[]) {
    const documents = await this.mapper.toArray(coreModels);
    const savedDocuments = await this.model.insertMany(documents);
    return this.mapper.fromArray(savedDocuments);
  }

  async find(key: string, value: any) {
    const query: any = { [key]: value };
    const documents = await this.model.find(query);
    return this.mapper.fromArray(documents);
  }

  async exists(key: string, value: any) {
    const query: any = { [key]: value };
    return await this.model.exists(query);
  }

  async count(key: string, value: any) {
    const query: any = { [key]: value };
    return await this.model.count(query);
  }

  async replace(key: string, value: any, coreModel: M) {
    const filterQuery: any = { [key]: value };
    const savedDocument = await this.model.replaceOne(filterQuery, coreModel);
    return await this.mapper.from(savedDocument);
  }

  async delete(key: string, value: any) {
    const query: any = { [key]: value };
    const result = await this.model.deleteMany(query);
    return result.deletedCount;
  }
}
