import { Module, forwardRef } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourResolver } from './tour.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';
import { EntryModule } from 'src/entry/entry.module';
import { UserModule } from 'src/user/user.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Tour]),
    EntryModule,
    forwardRef(() => UserModule),
  ],
  providers: [TourResolver, TourService],
  exports: [TourService],
})
export class TourModule { }
