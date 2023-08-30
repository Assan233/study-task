import {
  Injectable,
  CanActivate,
  ExecutionContext,
  //   HttpStatus,
} from '@nestjs/common';
// import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    // const response = context.switchToHttp().getResponse();
    // response.status(HttpStatus.FORBIDDEN).json({
    //   statusCode: HttpStatus.FORBIDDEN,
    //   message: '权限守卫校验失败',
    // });

    return true;
  }
}
