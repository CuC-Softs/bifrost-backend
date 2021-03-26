import { InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

@InputType()
export class UpdateTourProfileInput{
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  user_id?: String;

  @IsString()
  @IsOptional()
  name?: String;
}
