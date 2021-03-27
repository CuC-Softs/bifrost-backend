import { Injectable } from '@nestjs/common';
import { CreateLogBookInput } from './dto/create-log-book.input';
import { UpdateLogBookInput } from './dto/update-log-book.input';

@Injectable()
export class LogBookService {
  create(createLogBookInput: CreateLogBookInput) {
    return 'This action adds a new logBook';
  }

  findAll() {
    return `This action returns all logBook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logBook`;
  }

  update(id: number, updateLogBookInput: UpdateLogBookInput) {
    return `This action updates a #${id} logBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} logBook`;
  }
}
