import { Module } from '@nestjs/common';
import { EntryResolver } from './entry.resolver';
import { EntryService } from './entry.service';

@Module({
  providers: [EntryResolver, EntryService]
})
export class EntryModule {}
