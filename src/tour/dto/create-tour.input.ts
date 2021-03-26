import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

@InputType()
export class CreateTourInput{
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  name?: String;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  user_id?: String;

  @IsInt()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  tour_profile_id: Int16Array;

  @IsBoolean()
  @IsNotEmpty()
  isPublic: Boolean;
}
