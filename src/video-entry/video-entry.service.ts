import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEntryInput } from 'src/entry/dto/update-entry.input';
import { Repository } from 'typeorm';
import { CreateVideoEntryInput } from './dto/create-video-entry.input';
import { UpdateVideoEntryInput } from './dto/update-video-entry.input';
import { VideoEntry } from './entities/video-entry.entity';

@Injectable()
export class VideoEntryService {
  constructor(
    @InjectRepository(VideoEntry)
    private videoEntryRepository: Repository<VideoEntry>,
  ) {
    return;
  }

  async create(createVideoEntryInput: CreateVideoEntryInput) {
    //create an entry based in my entry input data
    const entry = this.videoEntryRepository.create(createVideoEntryInput);
    //saves the created entry in the database
    const saved = await this.videoEntryRepository.save(entry);
    //returns the created entry
    return saved;
  }

  async findAll() {
    //gets all entries in the database
    const entries = await this.videoEntryRepository.find();
    //return the entries
    return entries;
  }

  async findOne(id: number) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.videoEntryRepository.findOneOrFail(id);
      //returns entry
      return entry;
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }

  async update(id: number, updateVideoEntryInput: UpdateVideoEntryInput) {
    //the try-catch stucture here is a "wrapper" to my find operation, cause it can fail
    try {
      //searches for an entry in the database who contains the id
      const entry = await this.videoEntryRepository.findOneOrFail(id);
      //if entry is found, we updates the data with the input data
      Object.assign(entry, updateVideoEntryInput);
      //here we saves the updated data into the database
      const saved = await this.videoEntryRepository.save(entry);
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
      const entry = await this.videoEntryRepository.findOneOrFail(id);
      //removes the entry from the database
      await this.videoEntryRepository.remove(entry);
      //if the entry is not found, then it enters in catch stucture
    } catch (err) {
      //if enters here we alert the user with an error message
      throw new BadRequestException('Entry not found');
    }
  }
}
