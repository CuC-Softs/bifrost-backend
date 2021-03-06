import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SearchModule } from './search/search.module';
import { MediaModule } from './media/media.module';
import { MulterModule } from '@nestjs/platform-express';
import { RecommendationModule } from './recommendation/recommendation.module';
import { TourProfileModule } from './tour-profile/tour-profile.module';
import { TourModule } from './tour/tour.module';
import { ReportModule } from './report/report.module';
import { CommentModule } from './comment/comment.module';
import { VoteModule } from './vote/vote.module';
import { ImageEntryModule } from './image-entry/image-entry.module';
import { VideoEntryModule } from './video-entry/video-entry.module';
import { LocationEntryModule } from './location-entry/location-entry.module';
import { TextEntryModule } from './text-entry/text-entry.module';
import { EntryModule } from './entry/entry.module';
import { LogBookModule } from './log-book/log-book.module';
import { GraphQLJSON } from 'graphql-type-json';
import { TagModule } from './tag/tag.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      resolvers: { JSON: GraphQLJSON },
    }),
    MulterModule.register({
      dest: './tmp/uploads',
    }),
    UserModule,
    AuthModule,
    SearchModule,
    MediaModule,
    RecommendationModule,
    ReportModule,
    CommentModule,
    VoteModule,
    ImageEntryModule,
    VideoEntryModule,
    LocationEntryModule,
    TextEntryModule,
    EntryModule,
    LogBookModule,
    TourModule,
    TourProfileModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    return;
  }
}
