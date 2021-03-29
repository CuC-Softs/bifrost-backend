import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { FollowsService } from './follows/follows.service';
import { MediaModule } from 'src/media/media.module';
import { FollowsResolver } from './follows/follows.resolver';
import { LogBookModule } from 'src/log-book/log-book.module';
import { RecommendationModule } from 'src/recommendation/recommendation.module';
import { CommentModule } from 'src/comment/comment.module';
import { ReportModule } from 'src/report/report.module';
import { TourModule } from 'src/tour/tour.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    MediaModule,
    LogBookModule,
    RecommendationModule,
    CommentModule,
    ReportModule,
    TourModule,
  ],
  providers: [UserService, UserResolver, FollowsService, FollowsResolver],
  exports: [UserService],
})
export class UserModule { }
