import { InputType } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

@InputType()
export class CreateLogBookInput{
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  name: String;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  user_id: String;

  @IsInt()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio '})
  tour_id: Int16Array;
}
