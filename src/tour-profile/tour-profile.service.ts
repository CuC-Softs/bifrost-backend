import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateTourProfileInput } from './dto/create-tour-profile.input';
import { UpdateTourProfileInput } from './dto/update-tour-profile.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TourProfile } from './entities/tour-profile.entity';

@Injectable()
export class TourProfileService {
  constructor(
    @InjectRepository(TourProfile)
    private tourProfileRepository: Repository<TourProfile>,
  ) {
    return;
  }

  async create(createTourProfileInput: CreateTourProfileInput) {
    const tour_profile = this.tourProfileRepository.create(
      createTourProfileInput,
    );
    const saved = await this.tourProfileRepository.save(tour_profile);
    return saved;
  }

  async findAll() {
    const tour_profiles = await this.tourProfileRepository.find();
    return tour_profiles;
  }

  async findOne(id: number) {
    try {
      const tour_profile = await this.tourProfileRepository.findOneOrFail(id);
      return tour_profile;
    } catch (err) {
      throw new BadRequestException('Tour Profile not found');
    }
  }

  async update(id: number, updateTourInput: UpdateTourProfileInput) {
    try {
      const tour_profile = await this.tourProfileRepository.findOneOrFail(id);
      Object.assign(TourProfile, updateTourInput);
      const saved = await this.tourProfileRepository.save(tour_profile);
      return saved;
    } catch (error) {
      throw new BadRequestException('Tour Profile not found');
    }
  }

  async remove(id: number) {
    try {
      const tour_profile = await this.tourProfileRepository.findOneOrFail(id);
      await this.tourProfileRepository.remove(tour_profile);
    } catch (error) {
      throw new BadRequestException('Tour Profile not found');
    }
  }

  async findByUserId(tourId: string): Promise<TourProfile[]> {
    return await this.tourProfileRepository.find({
      where: { tour_id: tourId },
    });
  }
}
