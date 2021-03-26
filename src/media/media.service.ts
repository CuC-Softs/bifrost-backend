import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { unlinkSync } from 'fs';
import { Repository } from 'typeorm';
import { CreateMediaInput } from './dto/create-media.input';
import { UpdateMediaInput } from './dto/update-media.input';
import Media from './media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media) private mediaRepository: Repository<Media>,
  ) {
    return;
  }
  async createMedia(data: CreateMediaInput): Promise<Media> {
    const user = this.mediaRepository.create(data);
    const saved = await this.mediaRepository.save(user);
    if (!saved) {
      throw new InternalServerErrorException('Problema para criar um usuário');
    }
    return saved;
  }

  async findMedia(id: number): Promise<Media> {
    try {
      const media = await this.mediaRepository.findOneOrFail(id);
      return media;
    } catch (err) {
      throw new BadRequestException('Media not found');
    }
  }

  async indexMedias(): Promise<Media[]> {
    const medias = this.mediaRepository.find();
    return medias;
  }

  async updateMedia(id: number, data: UpdateMediaInput): Promise<Media> {
    try {
      const media = await this.mediaRepository.findOneOrFail(id);
      Object.assign(media, data);
      this.mediaRepository.save(media);
      return media;
    } catch (err) {
      throw new BadRequestException('Media not found');
    }
  }

  async deleteMedia(id: number): Promise<void> {
    try {
      const media = await this.mediaRepository.findOneOrFail(id);
      try {
        unlinkSync(media.path);

        this.mediaRepository.remove(media);
      } catch (err) {
        throw new BadRequestException('An error ocorred while removing media');
      }
    } catch (err) {
      throw new BadRequestException('Media not found');
    }
  }
}
