import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LocationEntryService } from './location-entry.service';
import { LocationEntry } from './entities/location-entry.entity';
import { CreateLocationEntryInput } from './dto/create-location-entry.input';
import { UpdateLocationEntryInput } from './dto/update-location-entry.input';

@Resolver(() => LocationEntry)
export class LocationEntryResolver {
  constructor(private readonly locationEntryService: LocationEntryService) {
    return;
  }

  @Mutation(() => LocationEntry)
  createLocationEntry(
    @Args('createLocationEntryInput')
    createLocationEntryInput: CreateLocationEntryInput,
  ) {
    return this.locationEntryService.create(createLocationEntryInput);
  }

  @Query(() => [LocationEntry], { name: 'locationEntry' })
  findAll() {
    return this.locationEntryService.findAll();
  }

  @Query(() => LocationEntry, { name: 'locationEntry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.locationEntryService.findOne(id);
  }

  @Mutation(() => LocationEntry)
  updateLocationEntry(
    @Args('id') id: number,
    @Args('updateLocationEntryInput')
    updateLocationEntryInput: UpdateLocationEntryInput,
  ) {
    return this.locationEntryService.update(id, updateLocationEntryInput);
  }

  @Mutation(() => LocationEntry)
  removeLocationEntry(@Args('id', { type: () => Int }) id: number) {
    return this.locationEntryService.remove(id);
  }
}
