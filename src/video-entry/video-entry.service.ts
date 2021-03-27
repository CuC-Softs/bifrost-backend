import { Injectable } from '@nestjs/common';
import { CreateVideoEntryInput } from './dto/create-video-entry.input';
import { UpdateVideoEntryInput } from './dto/update-video-entry.input';

@Injectable()
export class VideoEntryService {
  create(createVideoEntryInput: CreateVideoEntryInput) {
    return 'This action adds a new videoEntry';
  }

  findAll() {
    return `This action returns all videoEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} videoEntry`;
  }

  update(id: number, updateVideoEntryInput: UpdateVideoEntryInput) {
    return `This action updates a #${id} videoEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} videoEntry`;
  }
}
