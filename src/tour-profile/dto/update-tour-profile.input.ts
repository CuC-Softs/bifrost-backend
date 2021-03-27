import { CreateTourProfileInput } from './create-tour-profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTourProfileInput extends PartialType(CreateTourProfileInput) {
  @Field(() => Int)
  id: number;
}
