import { Test, TestingModule } from '@nestjs/testing';
import { AuthInstagramService } from './auth-instagram.service';

describe('AuthInstagramService', () => {
  let service: AuthInstagramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthInstagramService],
    }).compile();

    service = module.get<AuthInstagramService>(AuthInstagramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
