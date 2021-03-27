import { Module } from '@nestjs/common';
import { TextEntryService } from './text-entry.service';
import { TextEntryResolver } from './text-entry.resolver';

@Module({
  providers: [TextEntryResolver, TextEntryService]
})
export class TextEntryModule {}
