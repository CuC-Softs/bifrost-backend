import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class LogBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  user_id: number;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.logBooks)
  @JoinColumn({ name: 'user_id' })
  owner: User;
}
