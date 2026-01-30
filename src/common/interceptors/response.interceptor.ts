import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      map((data) => ({
        statusCode: 200,
        status: 'success',
        message: this.getMessage(request),
        data,
      })),
    );
  }

  private getMessage(req: any): string {
    const method = req.method;
    const url = req.route?.path || '';

    if (method === 'GET' && url.includes(':id')) {
      return 'Get user successfully';
    }

    if (method === 'GET') return 'Get data successfully';
    if (method === 'POST') return 'Create successfully';
    if (method === 'PATCH') return 'Update successfully';
    if (method === 'DELETE') return 'Delete successfully';

    return 'Success';
  }
}
