import { CreateTagInput } from './create-tag.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateTagInput extends PartialType(CreateTagInput) {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  value: string;
}
