import { Module } from '@nestjs/common';
import { TourProfileService } from './tour-profile.service';
import { TourProfileResolver } from './tour-profile.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourProfile } from './entities/tour-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TourProfile])],
  providers: [TourProfileResolver, TourProfileService],
  exports: [TourProfileService],
})
export class TourProfileModule { }
