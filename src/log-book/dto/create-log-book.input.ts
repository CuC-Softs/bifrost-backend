import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateLogBookInput {
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  user_id: string;

  @IsInt()
  @IsOptional()
  tour_id?: number;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  description: string;
}
