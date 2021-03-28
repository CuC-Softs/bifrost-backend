import { CreateVoteInput } from './create-vote.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateVoteInput extends PartialType(CreateVoteInput) {
  @IsString()
  @IsOptional()
  user_id?: string;

  @IsBoolean()
  @IsOptional()
  is_public?: boolean;
}
