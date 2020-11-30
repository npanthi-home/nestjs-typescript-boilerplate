import Fruit from './Fruit';
import CrudOperations from 'src/core/base/CrudOperations';

export default interface FruitEntityGateway extends CrudOperations<Fruit> {}
