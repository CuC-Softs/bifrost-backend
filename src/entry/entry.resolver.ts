import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EntryService } from './entry.service';
import { Entry } from './entities/entry.entity';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { VideoEntry } from 'src/video-entry/entities/video-entry.entity';
import { VideoEntryService } from 'src/video-entry/video-entry.service';
import { ImageEntryService } from 'src/image-entry/image-entry.service';
import { TextEntryService } from 'src/text-entry/text-entry.service';
import { LocationEntryService } from 'src/location-entry/location-entry.service';

@Resolver(() => Entry)
export class EntryResolver {
  constructor(
    private readonly entryService: EntryService,
    private videoEntryService: VideoEntryService,
    private imageEntryService: ImageEntryService,
    private textEntryService: TextEntryService,
    private locationEntryService: LocationEntryService,
  ) {
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

  // @ResolveField(() => VideoEntry)
  // async video_entry(@Parent() user: Entry): Promise<VideoEntry[]> {
  //   // return this.videoEntryService.findOne();
  // }

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
