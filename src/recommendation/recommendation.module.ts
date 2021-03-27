import { Module } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { RecommendationResolver } from './recommendation.resolver';

@Module({
  providers: [RecommendationResolver, RecommendationService]
})
export class RecommendationModule {}
