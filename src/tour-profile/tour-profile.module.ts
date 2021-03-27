import { Module } from '@nestjs/common';
import { TourProfileService } from './tour-profile.service';
import { TourProfileResolver } from './tour-profile.resolver';

@Module({
  providers: [TourProfileResolver, TourProfileService]
})
export class TourProfileModule {}
