import { CreateLocationEntryInput } from './create-location-entry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
@InputType()
export class UpdateLocationEntryInput extends PartialType(
  CreateLocationEntryInput,
) {
  @IsString()
  @IsOptional()
  location?: string;

  @IsInt()
  @IsOptional()
  entry_id?: number;
}
