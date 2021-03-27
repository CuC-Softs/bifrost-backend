import { Test, TestingModule } from '@nestjs/testing';
import { LogBookResolver } from './log-book.resolver';
import { LogBookService } from './log-book.service';

describe('LogBookResolver', () => {
  let resolver: LogBookResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogBookResolver, LogBookService],
    }).compile();

    resolver = module.get<LogBookResolver>(LogBookResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
