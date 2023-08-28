import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

/** 自定义异常过滤器 */
@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const exceptionStatus = exception.getStatus();
    const exceptionResponse = exception.getResponse() as object;

    response.status(exceptionStatus).json({
      ...exceptionResponse,
      statusCode: exceptionStatus,
      timestamp: new Date().toISOString(),
      path: request.url,
      _message: '已调用自定义异常过滤器：CustomExceptionFilter',
    });
  }
}
