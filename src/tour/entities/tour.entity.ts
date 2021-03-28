import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'tours' })
@ObjectType()
export class Tour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  user_id: string;

  @Column()
  tour_profile_id: number;

  @Column()
  is_public: boolean;

  @Column()
  description: string;
}
