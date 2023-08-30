import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('方法执行前：拦截器执行');

    const now = Date.now();
    return next.handle().pipe(
      // 方法执行后, 多个操作符处理
      timeout(5000),
      tap(() =>
        console.log(`方法执行后：拦截器执行，耗时-${Date.now() - now}ms`),
      ),
    );
  }
}
