import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // Xử lý trước khi đi tiếp
    console.log(req.url);
    next();
  }
}
