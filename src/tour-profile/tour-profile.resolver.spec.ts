import { Test, TestingModule } from '@nestjs/testing';
import { TourProfileResolver } from './tour-profile.resolver';

describe('TourProfileResolver', () => {
  let resolver: TourProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TourProfileResolver],
    }).compile();

    resolver = module.get<TourProfileResolver>(TourProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
