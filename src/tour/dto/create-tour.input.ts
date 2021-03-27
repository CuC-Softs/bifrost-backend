import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
@InputType()
export class CreateTourInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
