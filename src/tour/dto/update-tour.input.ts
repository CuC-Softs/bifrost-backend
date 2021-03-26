import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateTourInput{
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  name?: String;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  isPublic: Boolean;
}
