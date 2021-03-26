import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

@InputType()
export class UpdateMediaInput {
  @IsString()
  @IsNotEmpty({ message: 'Esse campo não pode estar vazio' })
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty({ message: 'Esse campo não pode estar vazio' })
  @IsOptional()
  path?: string;
}
