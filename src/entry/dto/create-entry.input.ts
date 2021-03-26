import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateEntryInput{
  @IsString()
  @IsOptional()
  type_fk?: String;

  @IsString()
  @IsOptional()
  value?: String;
}
