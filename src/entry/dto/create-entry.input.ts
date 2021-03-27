import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateEntryInput {
  @IsString()
  @IsNotEmpty()
  type_fk: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
