import { Test, TestingModule } from '@nestjs/testing';
import { ImageEntryResolver } from './image-entry.resolver';
import { ImageEntryService } from './image-entry.service';

describe('ImageEntryResolver', () => {
  let resolver: ImageEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageEntryResolver, ImageEntryService],
    }).compile();

    resolver = module.get<ImageEntryResolver>(ImageEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
