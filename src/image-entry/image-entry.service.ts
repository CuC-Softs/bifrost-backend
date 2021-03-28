import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageEntryInput } from './dto/create-image-entry.input';
import { UpdateImageEntryInput } from './dto/update-image-entry.input';
import { ImageEntry } from './entities/image-entry.entity';

@Injectable()
export class ImageEntryService {
  constructor(
    @InjectRepository(ImageEntry)
    private imageEntryRepository: Repository<ImageEntry>,
  ) {
    return;
  }

  async create(createImageEntryInput: CreateImageEntryInput) {
    //create an entry based in my entry input data
    const entry = this.imageEntryRepository.create(createImageEntryInput);
    //saves the created entry in the database
    const saved = await this.imageEntryRepository.save(entry);
    //returns the created entry
    return saved;
  }

  async findAll() {
    //gets all entries in the database
    const entries = await this.imageEntryRepository.find();
    //return the entries
    return entries;
  }

  async findOne(id: number) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.imageEntryRepository.findOneOrFail(id);
      //returns entry
      return entry;
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }

  async update(id: number, updateImageEntryInput: UpdateImageEntryInput) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.imageEntryRepository.findOneOrFail(id);
      //if entry is found, we updates the data with the input data
      Object.assign(entry, updateImageEntryInput);
      //here we saves the updated data into the database
      const saved = await this.imageEntryRepository.save(entry);
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
      const entry = await this.imageEntryRepository.findOneOrFail(id);
      //removes the entry from the database
      await this.imageEntryRepository.remove(entry);
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }
}
