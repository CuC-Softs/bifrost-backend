import { Module } from '@nestjs/common';
import { LocationEntryResolver } from './location-entry.resolver';
import { LocationEntryService } from './location-entry.service';

@Module({
  providers: [LocationEntryResolver, LocationEntryService]
})
export class LocationEntryModule {}
