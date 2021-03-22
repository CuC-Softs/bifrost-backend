import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    return;
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(data);
    const saved = await this.userRepository.save(user);
    if (!saved) {
      throw new InternalServerErrorException('Problema para criar um usuário');
    }
    return saved;
  }

  async getUser(id: string): Promise<User> {
    const user = this.userRepository.findOne(id);
    return user;
  }

  async indexUsers(): Promise<User[]> {
    const users = this.userRepository.find();
    return users;
  }

  async updateUser(id: string, data: UpdateUserInput): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      Object.assign(user, data);
      return await this.userRepository.save(user);
    } catch (err) {
      throw new Error('usuário não encontrado');
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      await this.userRepository.remove(user);
    } catch (err) {
      throw new Error('usuário não encontrado');
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: {
          email,
        },
      });
      return user;
    } catch (err) {
      throw new Error('usuário não encontrado');
    }
  }
}
