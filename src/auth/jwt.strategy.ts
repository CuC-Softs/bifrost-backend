import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'ranger',
    });
  }

  async validate(payload: { sub: User['uid']; name: string }) {
    const user = await this.userService.getUser(payload.sub);
    if (!user) {
      throw new UnauthorizedException('Jojer');
    }
    return { userId: payload.sub, username: payload.name };
  }
}
