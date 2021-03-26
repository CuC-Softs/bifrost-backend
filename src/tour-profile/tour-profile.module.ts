import { Module } from '@nestjs/common';
import { TourProfileResolver } from './tour-profile.resolver';
import { TourProfileService } from './tour-profile.service';
import { TourProfileService } from './tour-profile.service';

@Module({
  providers: [TourProfileResolver, TourProfileService]
})
export class TourProfileModule {}
