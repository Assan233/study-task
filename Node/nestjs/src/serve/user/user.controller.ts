import { CreateUserDTO, UpdateUserDTO, CreateUserSchema } from './interfaces';
import { AuthGuard } from '@/guard';
// import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  //   HttpException,
  //   HttpStatus,
  UseFilters,
  UseGuards,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CustomExceptionFilter } from '@/error';
import {
  JoiValidationPipe,
  IntValidationPipe,
  ClassValidationPipe,
} from '@/pipe';

@Controller('user')
@UseGuards(AuthGuard) /** 绑定路由守卫 */
@UseFilters(CustomExceptionFilter) /** 绑定自定义异常过滤器 */
export class UserController {
  constructor(
    private userService: UserService, // private readonly amqpConnection: AmqpConnection,
  ) {}

  /**
   * 获取用户列表
   */
  @Get('list')
  async getUserList() {
    /** MQ 消息发送 */
    // this.amqpConnection.publish('exchangeA', 'list', {
    //   msg: 'hello world',
    // });

    /** nest异常过滤器 */
    // throw new HttpException(
    //   {
    //     error: 'Forbidden',
    //     code: 505,
    //   },
    //   HttpStatus.FORBIDDEN, //403
    // );

    return {
      code: 200,
      data: await this.userService.getUserList(),
    };
  }

  /**
   * 获取用户
   */
  @Get(':id')
  async getUserDetail(
    @Param('id', ParseIntPipe) // 使用nest内置验证管道：ParseIntPipe
    id: number,
  ) {
    return {
      code: 200,
      data: await this.userService.getUserDetail(id),
    };
  }

  /**
   * 添加用户
   */
  @Post()
  /** 应用自定义dto验证管道 */
  @UsePipes(new JoiValidationPipe(CreateUserSchema))
  async createUser(@Body() dto: CreateUserDTO) {
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
  async deleteUser(
    @Param('id', IntValidationPipe) // 使用自定义验证管道：IntValidationPipe
    id: number,
  ) {
    return {
      code: 200,
      data: await this.userService.deleteUser(id),
    };
  }

  /**
   * 更新用户
   */
  @Put()
  //   @UsePipes(ClassValidationPipe)
  async updateUser(@Body(ClassValidationPipe) dto: UpdateUserDTO) {
    const user = await this.userService.updateUser(dto);
    return {
      code: 200,
      data: user,
      message: 'Success.',
    };
  }
}
