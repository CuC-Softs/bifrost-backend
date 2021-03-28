import { CreateTourInput } from './create-tour.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateTourInput extends PartialType(CreateTourInput) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  user_id?: string;

  @IsInt()
  @IsOptional()
  tour_profile_id?: number;

  @IsBoolean()
  @IsOptional()
  is_public?: boolean;
}
