import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateVoteInput } from './dto/create-vote.input';
import { UpdateVoteInput } from './dto/update-vote.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vote } from './entities/vote.entity';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private voteRepository: Repository<Vote>,
  ) {
    return;
  }

  async create(createVoteInput: CreateVoteInput) {
    const vote = this.voteRepository.create(createVoteInput);
    const saved = await this.voteRepository.save(vote);
    return saved;
  }

  async findAll() {
    const votes = await this.voteRepository.find();
    return votes;
  }

  async findOne(id: number) {
    try {
      const vote = await this.voteRepository.findOneOrFail(id);
      return vote;
    } catch (err) {
      throw new BadRequestException('Vote not found');
    }
  }

  async update(id: number, updateVoteInput: UpdateVoteInput) {
    try {
      const vote = await this.voteRepository.findOneOrFail(id);
      Object.assign(Vote, updateVoteInput);
      const saved = await this.voteRepository.save(vote);
      return saved;
    } catch (error) {
      throw new BadRequestException('Vote not found');
    }
  }

  async remove(id: number) {
    try {
      const vote = await this.voteRepository.findOneOrFail(id);
      await this.voteRepository.remove(vote);
    } catch (error) {
      throw new BadRequestException('Vote not found');
    }
  }

  async findByUserId(userId: string): Promise<Vote[]> {
    return await this.voteRepository.find({
      where: { user_id: userId },
    });
  }
}
