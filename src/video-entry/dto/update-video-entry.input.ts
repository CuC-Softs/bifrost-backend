import { CreateVideoEntryInput } from './create-video-entry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVideoEntryInput extends PartialType(CreateVideoEntryInput) {
  @Field(() => Int)
  id: number;
}
