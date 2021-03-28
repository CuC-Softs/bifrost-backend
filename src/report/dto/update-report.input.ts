import { CreateReportInput } from './create-report.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateReportInput extends PartialType(CreateReportInput) {
  @IsString()
  @IsOptional()
  user_id: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  justification: string;
}
