import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VideoEntryService } from './video-entry.service';
import { VideoEntry } from './entities/video-entry.entity';
import { CreateVideoEntryInput } from './dto/create-video-entry.input';
import { UpdateVideoEntryInput } from './dto/update-video-entry.input';

@Resolver(() => VideoEntry)
export class VideoEntryResolver {
  constructor(private readonly videoEntryService: VideoEntryService) { }

  @Mutation(() => VideoEntry)
  createVideoEntry(
    @Args('createVideoEntryInput') createVideoEntryInput: CreateVideoEntryInput,
  ) {
    return this.videoEntryService.create(createVideoEntryInput);
  }

  @Query(() => [VideoEntry], { name: 'videoEntry' })
  findAll() {
    return this.videoEntryService.findAll();
  }

  @Query(() => VideoEntry, { name: 'videoEntry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.videoEntryService.findOne(id);
  }

  @Mutation(() => VideoEntry)
  updateVideoEntry(
    @Args('updateVideoEntryInput') updateVideoEntryInput: UpdateVideoEntryInput,
  ) {
    return this.videoEntryService.update(
      updateVideoEntryInput.id,
      updateVideoEntryInput,
    );
  }

  @Mutation(() => VideoEntry)
  removeVideoEntry(@Args('id', { type: () => Int }) id: number) {
    return this.videoEntryService.remove(id);
  }
}
