import type { CreateUser, UpdateUser } from './interfaces';

import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
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
   * 获取用户
   */
  @Get(':id')
  async getUserDetail(@Param('id') id: number) {
    return {
      code: 200,
      data: await this.userService.getUserDetail(id),
    };
  }

  /**
   * 添加用户
   */
  @Post()
  async createUser(@Body() dto: CreateUser) {
    const user = await this.userService.createUser(dto);
    return {
      code: 200,
      data: user,
      message: 'Success.',
    };
  }

  /**
   * 删除用户
   */
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return {
      code: 200,
      data: await this.userService.deleteUser(id),
    };
  }

  /**
   * 更新用户
   */
  @Put()
  async updateUser(@Body() dto: UpdateUser) {
    const user = await this.userService.updateUser(dto);
    return {
      code: 200,
      data: user,
      message: 'Success.',
    };
  }
}
