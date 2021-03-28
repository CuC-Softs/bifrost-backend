import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
@InputType()
export class CreateTourInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsInt()
  @IsNotEmpty()
  tour_profile_id: number;

  @IsBoolean()
  @IsNotEmpty()
  is_public: boolean;

  @IsString()
  @IsNotEmpty()
  description: string;
}
