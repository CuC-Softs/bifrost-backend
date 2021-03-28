import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EntryService } from './entry.service';
import { Entry } from './entities/entry.entity';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';

@Resolver(() => Entry)
export class EntryResolver {
  constructor(private readonly entryService: EntryService) {
    return;
  }

  @Mutation(() => Entry)
  async createEntry(
    @Args('createEntryInput') createEntryInput: CreateEntryInput,
  ) {
    return this.entryService.create(createEntryInput);
  }

  @Query(() => [Entry], { name: 'entry' })
  async findAll() {
    return this.entryService.findAll();
  }

  @Query(() => Entry, { name: 'entry' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.entryService.findOne(id);
  }

  @Mutation(() => Entry)
  async updateEntry(
    @Args('id') id: number,
    @Args('updateEntryInput') updateEntryInput: UpdateEntryInput,
  ) {
    return this.entryService.update(id, updateEntryInput);
  }

  @Mutation(() => Boolean)
  async removeEntry(@Args('id', { type: () => Int }) id: number) {
    try {
      await this.entryService.remove(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
