import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateLocationEntryInput {
    @IsString()
    @IsOptional()
    location: string;
}
