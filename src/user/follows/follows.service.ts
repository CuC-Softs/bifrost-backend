import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class FollowsService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    return;
  }
  async getFollowersCount(id: string): Promise<number> {
    const count = await this.userRepository.count({
      relations: ['followedUsers'],
      where: { uid: id },
    });
    return count;
  }

  async getFollowers(id: string): Promise<User[]> {
    const users = await this.userRepository.query(
      'SELECT * FROM users as u WHERE follows.id = u.id and u.id = ' + id,
    );
    console.log(users);

    return users;
  }

  async followUser(id: string, targetId: string): Promise<boolean> {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      const otherUser = await this.userRepository.findOneOrFail(targetId);
      user.followedUsers = [otherUser];
      const saved = await this.userRepository.save(user);
      return true;
    } catch (err) {
      throw new BadRequestException('user not found');
    }
    return false;
  }
}
