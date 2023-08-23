import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/entities';
import { UserMiddleware } from '@/serve/user/user.middleware';

@Module({
  imports: [
    // 在当前模块内根据实体 注册数据库
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  // 应用模块中间件
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('/user'); // * 匹配所有路由
  }
}
