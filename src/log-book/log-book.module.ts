import { Module } from '@nestjs/common';
import { LogBookService } from './log-book.service';
import { LogBookResolver } from './log-book.resolver';
import { LogBook } from './entities/log-book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LogBook])],
  providers: [LogBookResolver, LogBookService],
  exports: [LogBookService],
})
export class LogBookModule { }
