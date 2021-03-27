import { Test, TestingModule } from '@nestjs/testing';
import { TextEntryResolver } from './text-entry.resolver';
import { TextEntryService } from './text-entry.service';

describe('TextEntryResolver', () => {
  let resolver: TextEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextEntryResolver, TextEntryService],
    }).compile();

    resolver = module.get<TextEntryResolver>(TextEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
