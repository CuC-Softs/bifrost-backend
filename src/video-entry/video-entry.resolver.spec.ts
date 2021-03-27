import { Test, TestingModule } from '@nestjs/testing';
import { VideoEntryResolver } from './video-entry.resolver';

describe('VideoEntryResolver', () => {
  let resolver: VideoEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoEntryResolver],
    }).compile();

    resolver = module.get<VideoEntryResolver>(VideoEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
