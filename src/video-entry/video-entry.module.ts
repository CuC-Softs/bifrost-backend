import { Module } from '@nestjs/common';
import { VideoEntryResolver } from './video-entry.resolver';
import { VideoEntryService } from './video-entry.service';

@Module({
  providers: [VideoEntryResolver, VideoEntryService]
})
export class VideoEntryModule {}
