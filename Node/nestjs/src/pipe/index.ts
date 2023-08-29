import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

/**
 * 自定义
 * 通过 Joi 自定义对象管道验证
 */
@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }

    return value;
  }
}

/**
 * 自定义
 * int 管道验证
 */
@Injectable()
export class IntValidationPipe implements PipeTransform {
  transform(value: any) {
    if (typeof +value !== 'number') {
      throw new BadRequestException('Validation Int failed');
    }

    return value;
  }
}

/**
 * 自定义
 * 通过 class-validator 实现 类验证器
 */
@Injectable()
export class ClassValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    /**
     * 通过 class-validator 对 value 做验证
     */
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new BadRequestException('Class ValidationPipe failed');
    }

    return value;
  }
}
