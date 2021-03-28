import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry } from './entities/entry.entity';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry) private entryRepository: Repository<Entry>,
  ) {
    return;
  }

  async create(createEntryInput: CreateEntryInput) {
    //create an entry based in my entry input data
    const entry = this.entryRepository.create(createEntryInput);
    //saves the created entry in the database
    const saved = await this.entryRepository.save(entry);
    //returns the created entry
    return saved;
  }

  async findAll() {
    //gets all entries in the database
    const entries = await this.entryRepository.find();
    //return the entries
    return entries;
  }

  async findOne(id: number) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.entryRepository.findOneOrFail(id);
      //returns entry
      return entry;
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }

  async update(id: number, updateEntryInput: UpdateEntryInput) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.entryRepository.findOneOrFail(id);
      //if entry is found, we updates the data with the input data
      Object.assign(entry, updateEntryInput);
      //here we saves the updated data into the database
      const saved = await this.entryRepository.save(entry);
      //returns the updated entry to user
      return saved;
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }

  async remove(id: number) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.entryRepository.findOneOrFail(id);
      //removes the entry from the database
      await this.entryRepository.remove(entry);
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }
}
