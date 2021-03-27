import { Injectable } from '@nestjs/common';
import { CreateTourProfileInput } from './dto/create-tour-profile.input';
import { UpdateTourProfileInput } from './dto/update-tour-profile.input';

@Injectable()
export class TourProfileService {
  create(createTourProfileInput: CreateTourProfileInput) {
    return 'This action adds a new tourProfile';
  }

  findAll() {
    return `This action returns all tourProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tourProfile`;
  }

  update(id: number, updateTourProfileInput: UpdateTourProfileInput) {
    return `This action updates a #${id} tourProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} tourProfile`;
  }
}
