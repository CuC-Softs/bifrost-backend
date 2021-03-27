import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LogBookService } from './log-book.service';
import { LogBook } from './entities/log-book.entity';
import { CreateLogBookInput } from './dto/create-log-book.input';
import { UpdateLogBookInput } from './dto/update-log-book.input';

@Resolver(() => LogBook)
export class LogBookResolver {
  constructor(private readonly logBookService: LogBookService) {}

  @Mutation(() => LogBook)
  createLogBook(@Args('createLogBookInput') createLogBookInput: CreateLogBookInput) {
    return this.logBookService.create(createLogBookInput);
  }

  @Query(() => [LogBook], { name: 'logBook' })
  findAll() {
    return this.logBookService.findAll();
  }

  @Query(() => LogBook, { name: 'logBook' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.logBookService.findOne(id);
  }

  @Mutation(() => LogBook)
  updateLogBook(@Args('updateLogBookInput') updateLogBookInput: UpdateLogBookInput) {
    return this.logBookService.update(updateLogBookInput.id, updateLogBookInput);
  }

  @Mutation(() => LogBook)
  removeLogBook(@Args('id', { type: () => Int }) id: number) {
    return this.logBookService.remove(id);
  }
}
