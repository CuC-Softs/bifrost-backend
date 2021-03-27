import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLogBookInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
