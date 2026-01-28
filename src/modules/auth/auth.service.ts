import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'Done login';
  }
}
