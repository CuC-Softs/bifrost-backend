import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryResolver } from './entry.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './entities/entry.entity';
import { VideoEntry } from 'src/video-entry/entities/video-entry.entity';
import { VideoEntryModule } from 'src/video-entry/video-entry.module';
import { ImageEntryModule } from 'src/image-entry/image-entry.module';
import { LocationEntryModule } from 'src/location-entry/location-entry.module';
import { TextEntryModule } from 'src/text-entry/text-entry.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Entry]),
    VideoEntryModule,
    TextEntryModule,
    ImageEntryModule,
    LocationEntryModule,
  ],
  providers: [EntryResolver, EntryService],
})
export class EntryModule { }
