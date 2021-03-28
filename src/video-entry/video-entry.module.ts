import { Module } from '@nestjs/common';
import { VideoEntryService } from './video-entry.service';
import { VideoEntryResolver } from './video-entry.resolver';
import { VideoEntry } from './entities/video-entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VideoEntry])],
  providers: [VideoEntryResolver, VideoEntryService],
})
export class VideoEntryModule { }
