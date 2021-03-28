import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Entity } from 'typeorm';

Entity({ name: 'votes' });
@InputType()
export class CreateVoteInput {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsBoolean()
  @IsNotEmpty()
  is_public: boolean;
}
