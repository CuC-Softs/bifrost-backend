import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateRecommendationInput } from './dto/create-recommendation.input';
import { UpdateRecommendationInput } from './dto/update-recommendation.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recommendation } from './entities/recommendation.entity';

@Injectable()
export class RecommendationService {
  constructor(
    @InjectRepository(Recommendation)
    private recommendationRepository: Repository<Recommendation>,
  ) {
    return;
  }

  async create(createRecommendationInput: CreateRecommendationInput) {
    const recommendation = this.recommendationRepository.create(
      createRecommendationInput,
    );
    const saved = await this.recommendationRepository.save(recommendation);
    return saved;
  }

  async findAll() {
    const recommendations = await this.recommendationRepository.find();
    return recommendations;
  }

  async findOne(id: number) {
    try {
      const recommendation = await this.recommendationRepository.findOneOrFail(
        id,
      );
      return recommendation;
    } catch (err) {
      throw new BadRequestException('Recommendation not found');
    }
  }

  async update(
    id: number,
    updateRecommendationInput: UpdateRecommendationInput,
  ) {
    try {
      const recommendation = await this.recommendationRepository.findOneOrFail(
        id,
      );
      Object.assign(recommendation, updateRecommendationInput);
      const saved = await this.recommendationRepository.save(recommendation);
      return saved;
    } catch (error) {
      throw new BadRequestException('Recommendation not found');
    }
  }

  async remove(id: number) {
    try {
      const recommendation = await this.recommendationRepository.findOneOrFail(
        id,
      );
      await this.recommendationRepository.remove(recommendation);
    } catch (error) {
      throw new BadRequestException('Recommendation not found');
    }
  }

  async findByUserId(userId: string): Promise<Recommendation[]> {
    return await this.recommendationRepository.find({
      where: { user_id: userId },
    });
  }
}
