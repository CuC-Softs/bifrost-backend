import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateTextEntryInput {
    @IsString()
    @IsOptional()
    text: string;
}
