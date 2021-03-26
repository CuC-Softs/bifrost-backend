import { Module } from '@nestjs/common';
import { TourResolver } from './tour.resolver';
import { TourService } from './tour.service';

@Module({
  providers: [TourResolver, TourService]
})
export class TourModule {}
