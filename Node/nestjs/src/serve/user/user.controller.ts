import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * 获取用户列表
   */
  @Get('list')
  getUserList() {
    return {
      code: 200,
      data: this.userService.getUserList(),
    };
  }

  /**
   * 添加用户
   */
  @Post()
  createUser(@Body() dto: User) {
    this.userService.createUser(dto);
    return {
      code: 200,
      message: 'Success.',
    };
  }
}
