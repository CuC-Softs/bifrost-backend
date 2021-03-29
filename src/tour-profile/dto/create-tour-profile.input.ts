import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import JSONa from 'graphql-type-json';

@InputType()
export class CreateTourProfileInput {
  @IsInt()
  @IsNotEmpty()
  tour_id: number;

  @Field(() => JSONa)
  values: JSON;
}
