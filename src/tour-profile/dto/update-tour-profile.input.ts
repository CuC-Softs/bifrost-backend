import { CreateTourProfileInput } from './create-tour-profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import JSONa from 'graphql-type-json';
@InputType()
export class UpdateTourProfileInput extends PartialType(
  CreateTourProfileInput,
) {
  @IsInt()
  @IsOptional()
  tour_id?: number;

  @Field(() => JSONa)
  values?: JSON;
}
