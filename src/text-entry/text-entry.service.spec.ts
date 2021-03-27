import { Test, TestingModule } from '@nestjs/testing';
import { TextEntryService } from './text-entry.service';

describe('TextEntryService', () => {
  let service: TextEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextEntryService],
    }).compile();

    service = module.get<TextEntryService>(TextEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
