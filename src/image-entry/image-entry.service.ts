import { Injectable } from '@nestjs/common';
import { CreateImageEntryInput } from './dto/create-image-entry.input';
import { UpdateImageEntryInput } from './dto/update-image-entry.input';

@Injectable()
export class ImageEntryService {
  create(createImageEntryInput: CreateImageEntryInput) {
    return 'This action adds a new imageEntry';
  }

  findAll() {
    return `This action returns all imageEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageEntry`;
  }

  update(id: number, updateImageEntryInput: UpdateImageEntryInput) {
    return `This action updates a #${id} imageEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageEntry`;
  }
}
