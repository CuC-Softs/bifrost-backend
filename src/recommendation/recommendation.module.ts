import { Module } from '@nestjs/common';
import { RecommendationResolver } from './recommendation.resolver';
import { RecommendationService } from './recommendation.service';

@Module({
  providers: [RecommendationResolver, RecommendationService]
})
export class RecommendationModule {}
