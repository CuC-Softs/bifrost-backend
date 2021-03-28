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

import JSONa from 'graphql-type-json';
@ObjectType()
export class TourProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Field(() => JSONa)
  @Column()
  values: any;
}
