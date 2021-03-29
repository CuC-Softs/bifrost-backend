import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TourService } from './tour.service';
import { Tour } from './entities/tour.entity';
import { CreateTourInput } from './dto/create-tour.input';
import { UpdateTourInput } from './dto/update-tour.input';
import { Entry } from 'src/entry/entities/entry.entity';
import { EntryService } from 'src/entry/entry.service';
import { User } from 'src/user/user.entity';
import { LogBook } from 'src/log-book/entities/log-book.entity';
import { UserService } from 'src/user/user.service';

@Resolver(() => Tour)
export class TourResolver {
  constructor(
    private readonly tourService: TourService,
    private entryService: EntryService,
    private userService: UserService,
  ) { }

  @Mutation(() => Tour)
  createTour(@Args('createTourInput') createTourInput: CreateTourInput) {
    return this.tourService.create(createTourInput);
  }

  @Query(() => [Tour], { name: 'tour' })
  findAll() {
    return this.tourService.findAll();
  }

  @Query(() => Tour, { name: 'tour' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tourService.findOne(id);
  }

  @Mutation(() => Tour)
  updateTour(
    @Args('id') id: number,
    @Args('updateTourInput') updateTourInput: UpdateTourInput,
  ) {
    return this.tourService.update(id, updateTourInput);
  }

  @ResolveField(() => Entry)
  entries(@Parent() tour: Tour): Promise<Entry[]> {
    return this.entryService.findByTourId(tour.id);
  }

  @ResolveField(() => User)
  async owner(@Parent() logBook: LogBook): Promise<User> {
    return this.userService.getUser(logBook.user_id);
  }

  @Mutation(() => Tour)
  removeTour(@Args('id', { type: () => Int }) id: number) {
    return this.tourService.remove(id);
  }
}
