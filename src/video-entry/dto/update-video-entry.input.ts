import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateVideoEntryInput {
    @IsString()
    @IsOptional()
    location: string;
}
