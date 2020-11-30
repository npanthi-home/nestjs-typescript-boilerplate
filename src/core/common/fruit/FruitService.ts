import CrudService from 'src/core/base/CrudService';
import Fruit from './Fruit';
import FruitEntityGateway from 'src/core/common/fruit/FruitEntityGateway';

export default class FruitService extends CrudService<Fruit> {
  gateway: FruitEntityGateway;
  constructor({ entityGateway }) {
    super({ entityGateway });
    this.gateway = entityGateway;
  }
}
