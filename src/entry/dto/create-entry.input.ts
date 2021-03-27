import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateEntryInput {
  @IsInt()
  @IsNotEmpty()
  order_in_list: number;
}
