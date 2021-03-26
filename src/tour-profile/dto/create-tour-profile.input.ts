import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateTourProfileInput{
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  user_id: String;

  @IsString()
  name: String;
}
