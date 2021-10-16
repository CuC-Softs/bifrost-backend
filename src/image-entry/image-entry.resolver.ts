import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImageEntryService } from './image-entry.service';
import { ImageEntry } from './entities/image-entry.entity';
import { CreateImageEntryInput } from './dto/create-image-entry.input';
import { UpdateImageEntryInput } from './dto/update-image-entry.input';

@Resolver(() => ImageEntry)
export class ImageEntryResolver {
  constructor(private readonly imageEntryService: ImageEntryService) {
    return;
  }

  @Mutation(() => ImageEntry)
  createImageEntry(
    @Args('createImageEntryInput') createImageEntryInput: CreateImageEntryInput,
  ) {
    return this.imageEntryService.create(createImageEntryInput);
  }

  @Query(() => [ImageEntry], { name: 'imageEntry' })
  findAll() {
    return this.imageEntryService.findAll();
  }

  @Query(() => ImageEntry, { name: 'imageEntry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imageEntryService.findOne(id);
  }

  @Mutation(() => ImageEntry)
  updateImageEntry(
    @Args('id') id: number,
    @Args('updateImageEntryInput') updateImageEntryInput: UpdateImageEntryInput,
  ) {
    return this.imageEntryService.update(id, updateImageEntryInput);
  }

  @Mutation(() => ImageEntry)
  removeImageEntry(@Args('id', { type: () => Int }) id: number) {
    return this.imageEntryService.remove(id);
  }
}
