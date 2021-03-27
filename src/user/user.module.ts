import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { FollowsService } from './follows/follows.service';
import { MediaModule } from 'src/media/media.module';
import { FollowsResolver } from './follows/follows.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MediaModule],
  providers: [UserService, UserResolver, FollowsService, FollowsResolver],
})
export class UserModule {
  constructor() {
    return;
  }
}
