import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './serve/user/user.module';
import { UserInfoModule } from './serve/user-info/user-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const UserDBModule = TypeOrmModule.forRoot({
  //   name: 'userConnection', // 用户标记不同的表
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'assan233',
  database: 'nestjs_db',

  /**
   * 1.登录数据库必须要注册实体
   * 2.实体类名必须要和 数据库-表名一致，因为 typeorm 会将 实例类名.toLowerCase() 作为表名访问数据。
   */
  //   entities: [User],

  /**
   * 根模块自动加载 子模块注册的实体
   */
  autoLoadEntities: true,
});

@Module({
  imports: [UserModule, UserInfoModule, UserDBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
