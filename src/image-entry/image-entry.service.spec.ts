import { Test, TestingModule } from '@nestjs/testing';
import { ImageEntryService } from './image-entry.service';

describe('ImageEntryService', () => {
  let service: ImageEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageEntryService],
    }).compile();

    service = module.get<ImageEntryService>(ImageEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
