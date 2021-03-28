import { CreateCommentInput } from './create-comment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateCommentInput extends PartialType(CreateCommentInput) {
  @IsString()
  @IsOptional()
  user_id?: string;

  @IsString()
  @IsOptional()
  message?: string;
}
