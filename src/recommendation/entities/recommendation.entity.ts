import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'recomendations' })
@ObjectType()
export class Recommendation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, (user) => user.recommendations)
  @JoinColumn({ name: 'user_id' })
  owner: User;
}
