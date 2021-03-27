import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationResolver } from './recommendation.resolver';
import { RecommendationService } from './recommendation.service';

describe('RecommendationResolver', () => {
  let resolver: RecommendationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommendationResolver, RecommendationService],
    }).compile();

    resolver = module.get<RecommendationResolver>(RecommendationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
