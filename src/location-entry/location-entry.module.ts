import { Module } from '@nestjs/common';
import { LocationEntryService } from './location-entry.service';
import { LocationEntryResolver } from './location-entry.resolver';

@Module({
  providers: [LocationEntryResolver, LocationEntryService]
})
export class LocationEntryModule {}
