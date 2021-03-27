import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourResolver } from './tour.resolver';

@Module({
  providers: [TourResolver, TourService]
})
export class TourModule {}
