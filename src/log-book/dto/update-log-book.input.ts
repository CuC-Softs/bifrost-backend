import { InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
} from 'class-validator';

@InputType()
export class UpdateLogBookInput{
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  name?: String;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  user_id?: String;

  @IsInt()
  @IsOptional()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio '})
  tour_id?: Int16Array;
}
