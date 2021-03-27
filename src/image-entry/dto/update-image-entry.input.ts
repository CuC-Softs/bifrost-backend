import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateImageEntryInput {
    @IsString()
    @IsOptional()
    location: string;
}
