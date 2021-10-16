import { Module } from '@nestjs/common';
import { InstagramController } from './instagram.controller';
import { AuthInstagramService } from './auth-instagram/auth-instagram.service';
import { InstagramStrategy } from './instagram.strategy';

@Module({
  controllers: [InstagramController],
  providers: [AuthInstagramService, InstagramStrategy],
})
export class InstagramModule { }
