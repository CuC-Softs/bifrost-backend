import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TextEntryService } from './text-entry.service';
import { TextEntry } from './entities/text-entry.entity';
import { CreateTextEntryInput } from './dto/create-text-entry.input';
import { UpdateTextEntryInput } from './dto/update-text-entry.input';

@Resolver(() => TextEntry)
export class TextEntryResolver {
  constructor(private readonly textEntryService: TextEntryService) { }

  @Mutation(() => TextEntry)
  createTextEntry(
    @Args('createTextEntryInput') createTextEntryInput: CreateTextEntryInput,
  ) {
    return this.textEntryService.create(createTextEntryInput);
  }

  @Query(() => [TextEntry], { name: 'textEntry' })
  findAll() {
    return this.textEntryService.findAll();
  }

  @Query(() => TextEntry, { name: 'textEntry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.textEntryService.findOne(id);
  }

  @Mutation(() => TextEntry)
  updateTextEntry(
    @Args('id') id: number,
    @Args('updateTextEntryInput') updateTextEntryInput: UpdateTextEntryInput,
  ) {
    return this.textEntryService.update(id, updateTextEntryInput);
  }

  @Mutation(() => TextEntry)
  removeTextEntry(@Args('id', { type: () => Int }) id: number) {
    return this.textEntryService.remove(id);
  }
}
