import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  password: string;
}
