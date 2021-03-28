import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TourProfileService } from './tour-profile.service';
import { TourProfile } from './entities/tour-profile.entity';
import { CreateTourProfileInput } from './dto/create-tour-profile.input';
import { UpdateTourProfileInput } from './dto/update-tour-profile.input';

@Resolver(() => TourProfile)
export class TourProfileResolver {
  constructor(private readonly tourProfileService: TourProfileService) { }

  @Mutation(() => TourProfile)
  createTourProfile(
    @Args('createTourProfileInput')
    createTourProfileInput: CreateTourProfileInput,
  ) {
    return this.tourProfileService.create(createTourProfileInput);
  }

  @Query(() => [TourProfile], { name: 'tourProfile' })
  findAll() {
    return this.tourProfileService.findAll();
  }

  @Query(() => TourProfile, { name: 'tourProfile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tourProfileService.findOne(id);
  }

  @Mutation(() => TourProfile)
  updateTourProfile(
    @Args('id') id: number,
    @Args('updateTourProfileInput')
    updateTourProfileInput: UpdateTourProfileInput,
  ) {
    return this.tourProfileService.update(id, updateTourProfileInput);
  }

  @Mutation(() => TourProfile)
  removeTourProfile(@Args('id', { type: () => Int }) id: number) {
    return this.tourProfileService.remove(id);
  }
}
