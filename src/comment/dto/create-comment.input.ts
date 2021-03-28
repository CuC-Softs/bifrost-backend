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
  @IsInt()
  @IsNotEmpty()
  comment_id: number;

  @IsString()
  @IsNotEmpty()
  text: string;
}
