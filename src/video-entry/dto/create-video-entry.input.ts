import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVideoEntryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
