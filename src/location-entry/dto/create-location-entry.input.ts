import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
@InputType()
export class CreateLocationEntryInput {
  @IsString()
  @IsNotEmpty()
  location: string;

  @IsInt()
  @IsNotEmpty()
  entry_id: number;
}
