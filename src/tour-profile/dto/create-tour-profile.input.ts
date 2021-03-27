import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTourProfileInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
