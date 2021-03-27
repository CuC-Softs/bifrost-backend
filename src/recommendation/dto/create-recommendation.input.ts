import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateRecommendationInput {
  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  type: string;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  value: string;

  @IsString()
  @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
  user_id: string;
}
