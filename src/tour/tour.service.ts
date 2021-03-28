import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateTourInput } from './dto/create-tour.input';
import { UpdateTourInput } from './dto/update-tour.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tour } from './entities/tour.entity';
@Injectable()
export class TourService {
  constructor(
    @InjectRepository(Tour)
    private tourRepository: Repository<Tour>,
  ) {
    return;
  }

  async create(createTourInput: CreateTourInput) {
    const tour = this.tourRepository.create(createTourInput);
    const saved = await this.tourRepository.save(tour);
    return saved;
  }

  async findAll() {
    const tours = await this.tourRepository.find();
    return tours;
  }

  async findOne(id: number) {
    try {
      const tour = await this.tourRepository.findOneOrFail(id);
      return tour;
    } catch (err) {
      throw new BadRequestException('Tour not found');
    }
  }

  async update(id: number, updateTourInput: UpdateTourInput) {
    try {
      const tour = await this.tourRepository.findOneOrFail(id);
      Object.assign(Tour, updateTourInput);
      const saved = await this.tourRepository.save(tour);
      return saved;
    } catch (error) {
      throw new BadRequestException('Tour not found');
    }
  }

  async remove(id: number) {
    try {
      const tour = await this.tourRepository.findOneOrFail(id);
      await this.tourRepository.remove(tour);
    } catch (error) {
      throw new BadRequestException('Tour not found');
    }
  }

  async findByUserId(userId: string): Promise<Tour[]> {
    return await this.tourRepository.find({
      where: { user_id: userId },
    });
  }
}
