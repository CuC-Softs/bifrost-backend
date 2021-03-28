import { Module } from '@nestjs/common';
import { ImageEntryService } from './image-entry.service';
import { ImageEntryResolver } from './image-entry.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntry } from './entities/image-entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntry])],
  providers: [ImageEntryResolver, ImageEntryService],
  exports: [ImageEntryService],
})
export class ImageEntryModule { }
