import type { User as IUser, CreateUserDTO, UpdateUserDTO } from './interfaces';

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

  async getUserDetail(id: number): Promise<IUser> {
    const user = await this.usersRepository.findOneBy({ id });
    return user;
  }

  async createUser(user: CreateUserDTO): Promise<IUser> {
    const { raw } = await this.usersRepository.insert(user);
    const { insertId: id } = raw;

    return this.getUserDetail(id);
  }

  async deleteUser(id: number) {
    await this.usersRepository.delete(id);
  }

  async updateUser(user: UpdateUserDTO): Promise<IUser> {
    const { name, password } = user;
    const { raw } = await this.usersRepository.update(user.id, {
      name,
      password,
    });

    const { insertId: id } = raw;
    return this.getUserDetail(id);
  }
}
