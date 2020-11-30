import UserService from '../common/user/UserService';
import Consumer from '../interface/Consumer';
import FruitService from 'src/core/common/fruit/FruitService';

export interface LetConsumerHaveFruitInput {
  fruitName: string;
  username: string;
}

export default class LetUserHaveFruit
  implements Consumer<LetConsumerHaveFruitInput> {
  userService: UserService;
  fruitService: FruitService;

  constructor({ userService, fruitService }) {
    this.userService = userService;
    this.fruitService = fruitService;
  }

  async consume(input: LetConsumerHaveFruitInput) {
    const fruits = await this.fruitService.find('name', input.fruitName);
    const users = await this.userService.find('username', input.username);
    if (fruits.length === 1 && users.length === 1) {
      console.log(`${input.username} had ${input.fruitName}`);
    } else {
      console.log(`${input.username} can't have ${input.fruitName}`);
    }
  }
}
