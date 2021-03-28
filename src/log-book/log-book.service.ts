import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLogBookInput } from './dto/create-log-book.input';
import { UpdateLogBookInput } from './dto/update-log-book.input';
import { LogBook } from './entities/log-book.entity';

@Injectable()
export class LogBookService {
  constructor(
    @InjectRepository(LogBook) private logBookRepository: Repository<LogBook>,
  ) {
    return;
  }
  async create(createLogBookInput: CreateLogBookInput): Promise<LogBook> {
    const logbook = this.logBookRepository.create(createLogBookInput);
    const saved = await this.logBookRepository.save(logbook);
    return saved;
  }

  async findAll(): Promise<LogBook[]> {
    const logbooks = await this.logBookRepository.find();
    return logbooks;
  }

  async findOne(id: number): Promise<LogBook> {
    try {
      const logbook = this.logBookRepository.findOneOrFail(id);
      return logbook;
    } catch (error) {
      throw new BadRequestException('Logbook not found');
    }
  }

  async update(
    id: number,
    updateLogBookInput: UpdateLogBookInput,
  ): Promise<LogBook> {
    try {
      const logbook = await this.logBookRepository.findOneOrFail(id);
      Object.assign(logbook, updateLogBookInput);
      await this.logBookRepository.save(logbook);
      return logbook;
    } catch (error) {
      throw new BadRequestException('Logbook not found');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const logbook = await this.logBookRepository.findOneOrFail(id);
      await this.logBookRepository.remove(logbook);
    } catch (error) {
      throw new BadRequestException('Logbook not found');
    }
  }

  async findByUserId(userId: string): Promise<LogBook[]> {
    const logbooks = await this.logBookRepository.find({
      where: { user_id: userId },
    });
    return logbooks;
  }
}
