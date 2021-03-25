import { InputType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  uid: string;

  @IsInt()
  cover_id: string;

  @IsBoolean()
  @IsNotEmpty()
  isPublic: boolean;

  @IsInt()
  @IsNotEmpty()
  cover_media: string;
}
