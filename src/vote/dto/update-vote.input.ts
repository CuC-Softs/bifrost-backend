import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

@InputType()
export class UpdateCommentInput {
  @IsBoolean()
  @IsOptional()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio' })
  is_up: boolean;
}
