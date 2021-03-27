import { InputType, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateEntryInput } from './create-entry.input';

@InputType()
export class UpdateEntryInput extends PartialType(CreateEntryInput) {
  @IsInt()
  @IsOptional()
  order_in_list?: number;
}
