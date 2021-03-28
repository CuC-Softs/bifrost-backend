import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'log_books' })
@ObjectType()
export class LogBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  user_id: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.logBooks)
  @JoinColumn({ name: 'user_id' })
  owner: User;
}
