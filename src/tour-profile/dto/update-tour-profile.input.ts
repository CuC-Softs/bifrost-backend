import { CreateTourProfileInput } from './create-tour-profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
@InputType()
export class UpdateTourProfileInput extends PartialType(
  CreateTourProfileInput,
) {
  @IsString()
  @IsOptional()
  user_id?: string;
}
