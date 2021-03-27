import { Module } from '@nestjs/common';
import { VoteResolver } from './vote.resolver';
import { VoteService } from './vote.service';

@Module({
  providers: [VoteResolver, VoteService]
})
export class VoteModule {}
