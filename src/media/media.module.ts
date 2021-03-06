import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaController } from './media.controller';
import Media from './media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],

  providers: [MediaService],

  controllers: [MediaController],

  exports: [MediaService],
})
export class MediaModule { }
