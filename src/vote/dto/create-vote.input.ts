import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateCommentInput {
    @IsString()
    @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
    user_id: string;

    @IsBoolean()
    @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
    is_up: boolean;
}
