import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfo } from '@/entities';
import { UserInfo as IUserInfo } from './interface';
@Injectable()
export class UserInfoService {
  constructor(
    // 使用 @InjectRepository() 装饰器将 UsersRepository 注入到 UsersService 中
    @InjectRepository(UserInfo)
    private usersInfoRepository: Repository<UserInfo>,
  ) {}

  async getUserInfoList(): Promise<IUserInfo[]> {
    const list = await this.usersInfoRepository.find();
    return list;
  }
}
