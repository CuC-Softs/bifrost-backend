import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryResolver } from './entry.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './entities/entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entry])],
  providers: [EntryResolver, EntryService],
})
export class EntryModule { }
