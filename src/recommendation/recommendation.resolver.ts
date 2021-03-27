import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecommendationService } from './recommendation.service';
import { Recommendation } from './entities/recommendation.entity';
import { CreateRecommendationInput } from './dto/create-recommendation.input';
import { UpdateRecommendationInput } from './dto/update-recommendation.input';

@Resolver(() => Recommendation)
export class RecommendationResolver {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Mutation(() => Recommendation)
  createRecommendation(@Args('createRecommendationInput') createRecommendationInput: CreateRecommendationInput) {
    return this.recommendationService.create(createRecommendationInput);
  }

  @Query(() => [Recommendation], { name: 'recommendation' })
  findAll() {
    return this.recommendationService.findAll();
  }

  @Query(() => Recommendation, { name: 'recommendation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.recommendationService.findOne(id);
  }

  @Mutation(() => Recommendation)
  updateRecommendation(@Args('updateRecommendationInput') updateRecommendationInput: UpdateRecommendationInput) {
    return this.recommendationService.update(updateRecommendationInput.id, updateRecommendationInput);
  }

  @Mutation(() => Recommendation)
  removeRecommendation(@Args('id', { type: () => Int }) id: number) {
    return this.recommendationService.remove(id);
  }
}
