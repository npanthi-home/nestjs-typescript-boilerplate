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

  async find(key: string, value: any) {
    return this.gateway.find(key, value);
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

  async delete(key: string, value: any) {
    return this.gateway.delete(key, value);
  }
}
