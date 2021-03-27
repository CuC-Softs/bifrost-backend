import { InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateRecommendationInput {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    type?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    value?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    user_id?: string;
}
