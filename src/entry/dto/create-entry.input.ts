import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

@InputType()
export class CreateEntryInput {
  @IsString()
  @IsNotEmpty()
  type_fk: string;

  @IsDate()
  @IsOptional()
  date?: Date;

  @IsString()
  @IsNotEmpty()
  value: string;
}
