import { CreateLogBookInput } from './create-log-book.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateLogBookInput extends PartialType(CreateLogBookInput) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  user_id?: string;

  @IsInt()
  @IsOptional()
  tour_id?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
