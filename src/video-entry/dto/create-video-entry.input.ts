import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateVideoEntryInput {
  @IsInt()
  @IsNotEmpty()
  media_id: number;

  @IsInt()
  @IsNotEmpty()
  entry_id: number;

  @IsString()
  @IsNotEmpty()
  location: string;
}
