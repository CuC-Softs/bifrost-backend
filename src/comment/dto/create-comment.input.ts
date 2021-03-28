import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateCommentInput {
  @IsString()
  @IsNotEmpty()
  suer_id: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
