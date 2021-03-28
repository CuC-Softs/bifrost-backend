import { InputType, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
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

  @IsDate()
  @IsOptional()
  date?: Date;
}
