import { Test, TestingModule } from '@nestjs/testing';
import { ImageEntryResolver } from './image-entry.resolver';

describe('ImageEntryResolver', () => {
  let resolver: ImageEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageEntryResolver],
    }).compile();

    resolver = module.get<ImageEntryResolver>(ImageEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
