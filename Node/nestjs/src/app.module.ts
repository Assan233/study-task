import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './serve/user/user.module';
import { UserInfoModule } from './serve/user-info/user-info.module';

@Module({
  imports: [UserModule, UserInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
