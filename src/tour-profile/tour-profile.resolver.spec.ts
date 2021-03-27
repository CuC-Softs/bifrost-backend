import { Test, TestingModule } from '@nestjs/testing';
import { TourProfileResolver } from './tour-profile.resolver';
import { TourProfileService } from './tour-profile.service';

describe('TourProfileResolver', () => {
  let resolver: TourProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TourProfileResolver, TourProfileService],
    }).compile();

    resolver = module.get<TourProfileResolver>(TourProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
