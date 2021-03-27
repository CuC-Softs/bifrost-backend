import { InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateReportInput{
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio '})
  type: String;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio '})
  justification: String;
}
