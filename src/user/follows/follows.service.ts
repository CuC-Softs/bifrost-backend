import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class FollowsService {
  constructor(
    @InjectConnection() private conn: Connection,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    return;
  }
  async getFollowersCount(id: string): Promise<number> {
    const [a, count] = await this.userRepository
      .createQueryBuilder('user')
      .innerJoin('user.followedUsers', 'f')
      .where('user.uid = :id', { id })
      .printSql()
      .getManyAndCount();

    return count;
  }

  async getFollowers(id: string): Promise<User[]> {
    const users = await this.conn
      .createQueryBuilder()
      .relation(User, 'followedUsers')
      .of(id)
      .loadMany<User>();

    return users;
  }

  async followUser(id: string, targetId: string): Promise<boolean> {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      const otherUser = await this.userRepository.findOneOrFail(targetId);
      await this.conn
        .createQueryBuilder()
        .relation(User, 'followedUsers')
        .of(user)
        .add(otherUser);
      return true;
    } catch (err) {
      console.log(err);

      throw new BadRequestException('user not found');
    }
    return false;
  }
}
