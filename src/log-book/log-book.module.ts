import { Module } from '@nestjs/common';
import { LogBookService } from './log-book.service';
import { LogBookResolver } from './log-book.resolver';

@Module({
  providers: [LogBookResolver, LogBookService],
})
export class LogBookModule { }
