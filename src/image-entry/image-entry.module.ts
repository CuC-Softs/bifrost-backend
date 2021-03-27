import { Module } from '@nestjs/common';
import { ImageEntryService } from './image-entry.service';
import { ImageEntryResolver } from './image-entry.resolver';

@Module({
  providers: [ImageEntryService, ImageEntryResolver]
})
export class ImageEntryModule {}
