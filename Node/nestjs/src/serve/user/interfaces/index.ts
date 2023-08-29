const Joi = require('joi');

import { IsString, IsInt } from 'class-validator';
export interface User {
  id: number;
  name: string;
}

/**
 * 创建用户
 */
// 定义Joi做管道验证的验证规则
export const CreateUserSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
});
export interface CreateUserDTO {
  name: string;
  password: string;
}

/**
 * 更新用户信息
 */
export class UpdateUserDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  password: string;
}
