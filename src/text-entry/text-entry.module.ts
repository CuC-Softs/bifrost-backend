import { Module } from '@nestjs/common';
import { TextEntryService } from './text-entry.service';
import { TextEntryResolver } from './text-entry.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextEntry } from './entities/text-entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TextEntry])],
  providers: [TextEntryResolver, TextEntryService],
  exports: [TextEntryService],
})
export class TextEntryModule { }
