import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
@InputType()
export class CreateTourProfileInput {
  @IsString()
  @IsNotEmpty()
  user_id: string;
}
