import { Module } from '@nestjs/common';
import { VideoEntryService } from './video-entry.service';
import { VideoEntryResolver } from './video-entry.resolver';

@Module({
  providers: [VideoEntryResolver, VideoEntryService]
})
export class VideoEntryModule {}
