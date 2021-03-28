import { CreateTextEntryInput } from './create-text-entry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateTextEntryInput extends PartialType(CreateTextEntryInput) {
  @IsString()
  @IsOptional()
  text?: string;

  @IsInt()
  @IsOptional()
  entry_id?: number;
}
