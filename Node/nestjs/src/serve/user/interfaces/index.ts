const Joi = require('joi');

export interface User {
  id: number;
  name: string;
}

// 定义Joi做管道验证的验证规则
export const CreateUserSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
});
export interface CreateUserDTO {
  name: string;
  password: string;
}

export type UpdateUserDTO = CreateUserDTO & { id: number };
