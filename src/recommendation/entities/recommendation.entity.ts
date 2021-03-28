import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'recommendations' })
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
}
