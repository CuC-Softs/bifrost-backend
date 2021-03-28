import { Module } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { RecommendationResolver } from './recommendation.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recommendation } from './entities/recommendation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recommendation])],
  providers: [RecommendationResolver, RecommendationService],
  exports: [RecommendationService],
})
export class RecommendationModule { }
