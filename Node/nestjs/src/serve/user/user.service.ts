import { User } from './interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly userList: User[] = [];

  getUserList(): User[] {
    return this.userList;
  }

  createUser(user: User) {
    this.userList.push(user);
  }
}
