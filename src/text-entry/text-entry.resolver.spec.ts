import { Test, TestingModule } from '@nestjs/testing';
import { TextEntryResolver } from './text-entry.resolver';

describe('TextEntryResolver', () => {
  let resolver: TextEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextEntryResolver],
    }).compile();

    resolver = module.get<TextEntryResolver>(TextEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
