import {
  PipeTransform,
  Injectable,
  BadRequestException,
  //   ArgumentMetadata,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

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
