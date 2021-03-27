import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateEntryInput {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  type_fk?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  value: string;
}
