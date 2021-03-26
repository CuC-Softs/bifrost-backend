import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('media')
export class MediaController {
  @UseInterceptors(FileInterceptor('file', { dest: 'tmp/uploads' }))
  @Post()
  public async createMedia(@UploadedFile() file) {
    console.log(file);
  }
}
