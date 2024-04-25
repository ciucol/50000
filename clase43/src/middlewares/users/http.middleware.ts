import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class HttpMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`${req.method} at ${req.url} received`);
    next();
  }
}
