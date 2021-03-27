import { Test, TestingModule } from '@nestjs/testing';
import { LocationEntryResolver } from './location-entry.resolver';
import { LocationEntryService } from './location-entry.service';

describe('LocationEntryResolver', () => {
  let resolver: LocationEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationEntryResolver, LocationEntryService],
    }).compile();

    resolver = module.get<LocationEntryResolver>(LocationEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
