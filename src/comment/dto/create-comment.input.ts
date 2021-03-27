import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateCommentInput {
  @IsInt()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  comment_id: number;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  text: string;
}
