import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
@InputType()
export class CreateImageEntryInput {
  @IsInt()
  @IsNotEmpty()
  media_id: number;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsInt()
  @IsNotEmpty()
  entry_id: number;
}
