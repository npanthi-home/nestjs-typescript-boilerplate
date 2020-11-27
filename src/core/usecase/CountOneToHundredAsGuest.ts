import { v4 as uuidv4 } from 'uuid';
import User from '../common/user/User';
import UserService from '../common/user/UserService';
import Runnable from '../interface/Runnable';

export default class CountOneToHundredAsGuest implements Runnable {
  userService: UserService;

  constructor({ userService }) {
    this.userService = userService;
  }

  run() {
    const temp: User = {
      username: `guest-${uuidv4()}`,
      email: '',
      firstName: '',
      lastName: '',
    };
    this.userService.create(temp);
    for (let i = 1; i <= 100; i++) {
      console.log(`${temp.username} counts ${i}`);
    }
    this.userService.delete(temp.username);
  }
}
