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
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  @IsOptional()
  name?: string;

  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  @IsOptional()
  uid?: string;

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;

  @IsInt()
  @IsOptional()
  coverMedia?: number;
}
