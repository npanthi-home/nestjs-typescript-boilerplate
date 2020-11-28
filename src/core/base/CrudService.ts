import CrudGateway from './CrudGateway';

export default abstract class CrudService<M, ID> {
  gateway: CrudGateway<M, ID>;

  constructor({ entityGateway: gateway }) {
    this.gateway = gateway;
  }

  async create(model: M) {
    return await this.gateway.create(model);
  }

  async get(id: ID) {
    return await this.gateway.get(id);
  }

  async delete(id: ID) {
    return await this.gateway.delete(id);
  }

  async update(model: M) {
    return await this.gateway.update(model);
  }
}
