import { Module } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { UserInfoController } from './user-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from '@/entities';
@Module({
  imports: [
    // 在当前模块内根据实体 注册数据库
    TypeOrmModule.forFeature([UserInfo]),
  ],
  providers: [UserInfoService],
  controllers: [UserInfoController],
})
export class UserInfoModule {}
