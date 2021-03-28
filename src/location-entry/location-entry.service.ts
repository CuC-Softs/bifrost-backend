import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoEntry } from 'src/video-entry/entities/video-entry.entity';
import { Repository } from 'typeorm';
import { CreateLocationEntryInput } from './dto/create-location-entry.input';
import { UpdateLocationEntryInput } from './dto/update-location-entry.input';
import { LocationEntry } from './entities/location-entry.entity';

@Injectable()
export class LocationEntryService {
  constructor(
    @InjectRepository(LocationEntry)
    private locationEntryRepository: Repository<LocationEntry>,
  ) {
    return;
  }
  async create(createLocationEntryInput: CreateLocationEntryInput) {
    //create an entry based in my entry input data
    const entry = this.locationEntryRepository.create(createLocationEntryInput);
    //saves the created entry in the database
    const saved = await this.locationEntryRepository.save(entry);
    //returns the created entry
    return saved;
  }

  async findAll() {
    //gets all entries in the database
    const entries = await this.locationEntryRepository.find();
    //return the entries
    return entries;
  }

  async findOne(id: number) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.locationEntryRepository.findOneOrFail(id);
      //returns entry
      return entry;
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }

  async update(id: number, updateLocationEntryInput: UpdateLocationEntryInput) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.locationEntryRepository.findOneOrFail(id);
      //if entry is found, we updates the data with the input data
      Object.assign(entry, updateLocationEntryInput);
      //here we saves the updated data into the database
      const saved = await this.locationEntryRepository.save(entry);
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
      const entry = await this.locationEntryRepository.findOneOrFail(id);
      //removes the entry from the database
      await this.locationEntryRepository.remove(entry);
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }
}
