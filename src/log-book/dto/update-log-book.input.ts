import { CreateLogBookInput } from './create-log-book.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLogBookInput extends PartialType(CreateLogBookInput) {
  @Field(() => Int)
  id: number;
}
