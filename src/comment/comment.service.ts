import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {
    return;
  }

  async create(createCommentInput: CreateCommentInput) {
    const comment = this.commentRepository.create(createCommentInput);
    const saved = await this.commentRepository.save(comment);
    return saved;
  }

  async findAll() {
    const comments = await this.commentRepository.find();
    return comments;
  }

  async findOne(id: number) {
    try {
      const comment = await this.commentRepository.findOneOrFail(id);
      return comment;
    } catch (err) {
      throw new BadRequestException('Comment not found');
    }
  }

  async update(id: number, updateCommentInput: UpdateCommentInput) {
    try {
      const comment = await this.commentRepository.findOneOrFail(id);
      Object.assign(Comment, updateCommentInput);
      const saved = await this.commentRepository.save(comment);
      return saved;
    } catch (error) {
      throw new BadRequestException('Comment not found');
    }
  }

  async remove(id: number) {
    try {
      const comment = await this.commentRepository.findOneOrFail(id);
      await this.commentRepository.remove(comment);
    } catch (error) {
      throw new BadRequestException('Comment not found');
    }
  }

  async findByUserId(userId: string): Promise<Comment[]> {
    return await this.commentRepository.find({
      where: { user_id: userId },
    });
  }
}
