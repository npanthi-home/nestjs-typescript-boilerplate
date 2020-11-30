import FruitService from './FruitService';
import FruitEntityGateway from 'src/core/common/fruit/FruitEntityGateway';
export default class FruitContext {
  gateway: FruitEntityGateway;
  service: FruitService;

  constructor({ entityGateway }) {
    this.gateway = entityGateway;
    this.service = new FruitService({ entityGateway });
  }
}
