import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
} from 'typeorm';
@Entity({ name: 'reports' })
@ObjectType()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  type: string;

  @Column()
  justification: string;

  @ManyToOne(() => User, (user) => user.reports)
  @JoinColumn({ name: 'user_id' })
  owner: User;
}
