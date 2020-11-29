import CrudOperations from './CrudOperations';

export default abstract class CrudService<M> implements CrudOperations<M> {
  gateway: CrudOperations<M>;

  constructor({ entityGateway: gateway }) {
    this.gateway = gateway;
  }

  async save(model: M) {
    return this.gateway.save(model);
  }

  async saveAll(models: M[]) {
    return this.gateway.saveAll(models);
  }

  async findAll(key: string, value: any) {
    return this.gateway.findAll(key, value);
  }

  async findOne(key: string, value: any) {
    return this.gateway.findOne(key, value);
  }

  async exists(key: string, value: any) {
    return this.gateway.exists(key, value);
  }

  async count(key: string, value: any) {
    return this.gateway.count(key, value);
  }

  async replace(key: string, value: any, model: M) {
    return this.gateway.replace(key, value, model);
  }

  async deleteAll(key: string, value: any) {
    return this.gateway.deleteAll(key, value);
  }

  async deleteOne(key: string, value: any) {
    return this.gateway.deleteOne(key, value);
  }
}
