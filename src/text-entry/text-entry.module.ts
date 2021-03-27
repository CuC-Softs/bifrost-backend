import { Module } from '@nestjs/common';
import { TextEntryResolver } from './text-entry.resolver';
import { TextEntryService } from './text-entry.service';

@Module({
  providers: [TextEntryResolver, TextEntryService]
})
export class TextEntryModule {}
