import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './serve/user/user.module';
import { UserInfoModule } from './serve/user-info/user-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const UserDBModule = TypeOrmModule.forRoot({
  name: 'user', // 用户标记不同的表
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'assan233',
  database: 'nestjs_db',
  entities: [],
});

@Module({
  imports: [UserModule, UserInfoModule, UserDBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
