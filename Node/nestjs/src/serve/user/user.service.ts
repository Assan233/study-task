import type { User as IUser, CreateUser } from './interfaces';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/entities';

@Injectable()
export class UserService {
  constructor(
    // 使用 @InjectRepository() 装饰器将 UsersRepository 注入到 UsersService 中
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUserList(): Promise<IUser[]> {
    const list = await this.usersRepository.find({ select: ['id', 'name'] });
    return list;
  }

  async createUser(user: CreateUser) {
    await this.usersRepository.insert(user);
  }
}
