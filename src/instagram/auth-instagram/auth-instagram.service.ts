import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthInstagramService {
  login(req: Request) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
  // logout() { }
}
