import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LogBookService } from './log-book.service';
import { LogBook } from './entities/log-book.entity';
import { CreateLogBookInput } from './dto/create-log-book.input';
import { UpdateLogBookInput } from './dto/update-log-book.input';

@Resolver(() => LogBook)
export class LogBookResolver {
  constructor(private readonly logBookService: LogBookService) {
    return;
  }

  @Mutation(() => LogBook)
  async createLogBook(
    @Args('createLogBookInput') createLogBookInput: CreateLogBookInput,
  ) {
    return this.logBookService.create(createLogBookInput);
  }

  @Query(() => [LogBook], { name: 'logBook' })
  async findAll() {
    return this.logBookService.findAll();
  }

  @Query(() => LogBook, { name: 'logBook' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.logBookService.findOne(id);
  }

  @Mutation(() => LogBook)
  async updateLogBook(
    @Args('id') id: number,
    @Args('updateLogBookInput') updateLogBookInput: UpdateLogBookInput,
  ) {
    return this.logBookService.update(id, updateLogBookInput);
  }

  @Mutation(() => Boolean)
  async removeLogBook(@Args('id', { type: () => Int }) id: number) {
    try {
      await this.logBookService.remove(id);
      return true;
    } catch (err) {
      return false;
    }
  }
}
