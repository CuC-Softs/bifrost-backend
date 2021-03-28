import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourResolver } from './tour.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Tour])],
  providers: [TourResolver, TourService],
  exports: [TourService],
})
export class TourModule { }
