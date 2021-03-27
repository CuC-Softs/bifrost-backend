import { Test, TestingModule } from '@nestjs/testing';
import { LocationEntryService } from './location-entry.service';

describe('LocationEntryService', () => {
  let service: LocationEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationEntryService],
    }).compile();

    service = module.get<LocationEntryService>(LocationEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
