import type { CreateUser } from './interfaces';

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * 获取用户列表
   */
  @Get('list')
  async getUserList() {
    return {
      code: 200,
      data: await this.userService.getUserList(),
    };
  }

  /**
   * 添加用户
   */
  @Post()
  async createUser(@Body() dto: CreateUser) {
    await this.userService.createUser(dto);
    return {
      code: 200,
      message: 'Success.',
    };
  }
}
