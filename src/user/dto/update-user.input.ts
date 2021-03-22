import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  @IsOptional()
  password?: string;
}
