import { Injectable } from '@nestjs/common';
import { CreateLocationEntryInput } from './dto/create-location-entry.input';
import { UpdateLocationEntryInput } from './dto/update-location-entry.input';

@Injectable()
export class LocationEntryService {
  create(createLocationEntryInput: CreateLocationEntryInput) {
    return 'This action adds a new locationEntry';
  }

  findAll() {
    return `This action returns all locationEntry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationEntry`;
  }

  update(id: number, updateLocationEntryInput: UpdateLocationEntryInput) {
    return `This action updates a #${id} locationEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} locationEntry`;
  }
}
