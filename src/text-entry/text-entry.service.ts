import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTextEntryInput } from './dto/create-text-entry.input';
import { UpdateTextEntryInput } from './dto/update-text-entry.input';
import { TextEntry } from './entities/text-entry.entity';

@Injectable()
export class TextEntryService {
  constructor(
    @InjectRepository(TextEntry)
    private textEntryRepository: Repository<TextEntry>,
  ) {
    return;
  }
  async create(createTextEntryInput: CreateTextEntryInput) {
    //create an entry based in my entry input data
    const entry = this.textEntryRepository.create(createTextEntryInput);
    //saves the created entry in the database
    const saved = await this.textEntryRepository.save(entry);
    //returns the created entry
    return saved;
  }

  async findAll() {
    //gets all entries in the database
    const entries = await this.textEntryRepository.find();
    //return the entries
    return entries;
  }

  async findOne(id: number) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.textEntryRepository.findOneOrFail(id);
      //returns entry
      return entry;
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }

  async update(id: number, updateTextEntryInput: UpdateTextEntryInput) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.textEntryRepository.findOneOrFail(id);
      //if entry is found, we updates the data with the input data
      Object.assign(entry, updateTextEntryInput);
      //here we saves the updated data into the database
      const saved = await this.textEntryRepository.save(entry);
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
      const entry = await this.textEntryRepository.findOneOrFail(id);
      //removes the entry from the database
      await this.textEntryRepository.remove(entry);
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }
}
