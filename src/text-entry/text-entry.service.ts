import { Injectable } from '@nestjs/common';
import { CreateTextEntryInput } from './dto/create-text-entry.input';
import { UpdateTextEntryInput } from './dto/update-text-entry.input';

@Injectable()
export class TextEntryService {
  create(createTextEntryInput: CreateTextEntryInput) {
    return 'This action adds a new textEntry';
  }

  findAll() {
    return `This action returns all textEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textEntry`;
  }

  update(id: number, updateTextEntryInput: UpdateTextEntryInput) {
    return `This action updates a #${id} textEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} textEntry`;
  }
}
