import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
@ObjectType()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  is_public: boolean;
}
