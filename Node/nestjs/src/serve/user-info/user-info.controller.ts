import { Controller, Get } from '@nestjs/common';
import { UserInfoService } from './user-info.service';

@Controller('user-info')
export class UserInfoController {
  constructor(private userInfoService: UserInfoService) {}

  /**
   * 获取用户详情列表
   */
  @Get('list')
  async getUserInfoList() {
    return {
      code: 200,
      data: await this.userInfoService.getUserInfoList(),
    };
  }
}
