import { CreateRecommendationInput } from './create-recommendation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateRecommendationInput extends PartialType(
  CreateRecommendationInput,
) {
  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  value?: string;

  @IsString()
  @IsOptional()
  user_id?: string;
}
