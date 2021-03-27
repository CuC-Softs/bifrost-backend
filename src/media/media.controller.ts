import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { resolve } from 'path';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {
    return;
  }
  @UseInterceptors(FileInterceptor('file', { dest: 'tmp/uploads' }))
  @Post()
  public async createMedia(@UploadedFile() file) {
    // this.mediaService.createMedia({name:file.name})
  }
  @Get()
  public async getMedia(@Res() res: Response, @Param('id') id: number) {
    const media = await this.mediaService.findMedia(id);
    res.download(resolve(__dirname, '..', '..', 'tmp', media.path));
  }
}
