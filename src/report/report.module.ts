import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportResolver } from './report.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  providers: [ReportResolver, ReportService],
  exports: [ReportService],
})
export class ReportModule { }
