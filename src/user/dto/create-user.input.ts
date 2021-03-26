import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  uid: string;

  @IsInt()
  @IsOptional()
  coverMedia?: number;

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
