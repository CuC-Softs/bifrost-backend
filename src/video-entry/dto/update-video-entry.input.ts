import { CreateVideoEntryInput } from './create-video-entry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateVideoEntryInput extends PartialType(CreateVideoEntryInput) {
  @IsInt()
  @IsOptional()
  media_id?: number;

  @IsInt()
  @IsOptional()
  entry_id?: number;

  @IsString()
  @IsOptional()
  location?: string;
}
