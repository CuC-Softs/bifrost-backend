import { Test, TestingModule } from '@nestjs/testing';
import { VideoEntryResolver } from './video-entry.resolver';
import { VideoEntryService } from './video-entry.service';

describe('VideoEntryResolver', () => {
  let resolver: VideoEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoEntryResolver, VideoEntryService],
    }).compile();

    resolver = module.get<VideoEntryResolver>(VideoEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
