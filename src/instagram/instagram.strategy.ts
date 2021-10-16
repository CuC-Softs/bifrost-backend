import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-instagram-graph';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
  constructor() {
    super({
      clientID: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      callbackURL: 'https://localhost/auth/instagram/callback',
      scope: ['user_profile', 'user_media'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    console.log(profile);
    done(null, profile);
  }
}
