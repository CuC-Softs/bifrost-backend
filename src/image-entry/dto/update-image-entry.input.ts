import { CreateImageEntryInput } from './create-image-entry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateImageEntryInput extends PartialType(CreateImageEntryInput) {
  @IsString()
  @IsOptional()
  location?: string;
}
