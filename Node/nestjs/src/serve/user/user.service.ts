import { User } from './interfaces';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) {}
  private readonly userList: User[] = [];

  getUserList(): User[] {
    console.log(this.dataSource);
    return this.userList;
  }

  createUser(user: User) {
    this.userList.push(user);
  }
}
