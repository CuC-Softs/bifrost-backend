import { Test, TestingModule } from '@nestjs/testing';
import { VideoEntryService } from './video-entry.service';

describe('VideoEntryService', () => {
  let service: VideoEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoEntryService],
    }).compile();

    service = module.get<VideoEntryService>(VideoEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
