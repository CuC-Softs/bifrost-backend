import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDate,
} from 'class-validator';

@InputType()
export class UpdateEntryInput {
  @IsString()
  @IsOptional()
  type_fk?: string;

  @IsString()
  @IsOptional()
  value?: string;

  @IsDate()
  @IsOptional()
  date?: Date;
}
