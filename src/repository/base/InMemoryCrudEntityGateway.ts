import CrudOperations from 'src/core/base/CrudOperations';
import IllegalStateError from 'src/core/common/error/types/IllegalStateError';
import NotFoundError from 'src/core/common/error/types/NotFoundError';

export default class InMemoryCrudEntityGateway<M> implements CrudOperations<M> {
  storage: Map<string, M>;

  constructor(private pk: string) {
    this.storage = new Map();
  }

  async save(model: M) {
    this.storage.set(model[this.pk], model);
    return model;
  }

  async saveAll(models: M[]) {
    models.map((model) => this.save(model));
    return models;
  }

  async findAll(key: string, value: any) {
    const results = [];
    for (const model of this.storage.values()) {
      if (model[key] === value) {
        results.push(model);
      }
    }
    return results;
  }

  async findOne(key: string, value: any) {
    if (this.pk === key) {
      return this.storage[key];
    } else {
      for (const model of this.storage.values()) {
        if (model[key] === value) {
          return model;
        }
      }
    }
  }

  async exists(key: string, value: any) {
    if (this.pk === key) {
      return this.storage[key];
    } else {
      for (const model of this.storage.values()) {
        if (model[key] === value) {
          return true;
        }
      }
      return false;
    }
  }

  async count(key: string, value: any) {
    if (this.pk === key) {
      return 1;
    } else {
      let count = 0;
      for (const model of this.storage.values()) {
        if (model[key] === value) {
          count += 1;
        }
      }
      return count;
    }
  }

  async replace(key: string, value: any, model: M) {
    this.storage.set(model[this.pk], model);
    return model;
  }

  async deleteAll(key: string, value: any) {
    if (this.pk === key) {
      this.storage.delete(value);
      return 1;
    } else {
      let count = 0;
      for (const model of this.storage.values()) {
        if (model[key] === value) {
          this.storage.set(model[this.pk], model);
          count += 1;
        }
      }
      return count;
    }
  }

  async deleteOne(key: string, value: any) {
    if (this.pk === key) {
      const deletedModel = this.storage.get(value);
      this.storage.delete(value);
      return deletedModel;
    } else {
      const results = [];
      for (const model of this.storage.values()) {
        results.push(model);
      }
      if (results.length > 1) {
        throw new IllegalStateError('More than one matching users exist');
      } else if (results.length === 0) {
        throw new NotFoundError('No such user exists');
      } else {
        this.storage.delete(results[0][this.pk]);
        return results[0];
      }
    }
  }
}
