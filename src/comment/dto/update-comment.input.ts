import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateCommentInput {
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  text: string;
}
