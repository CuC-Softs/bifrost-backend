import { Module } from '@nestjs/common';
import { LogBookResolver } from './log-book.resolver';
import { LogBookService } from './log-book.service';

@Module({
  providers: [LogBookResolver, LogBookService]
})
export class LogBookModule {}
