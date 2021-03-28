import { Module } from '@nestjs/common';
import { LocationEntryService } from './location-entry.service';
import { LocationEntryResolver } from './location-entry.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationEntry } from './entities/location-entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntry])],
  providers: [LocationEntryResolver, LocationEntryService],
  exports: [LocationEntryService],
})
export class LocationEntryModule { }
