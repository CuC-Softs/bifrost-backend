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
  ManyToOne,
} from 'typeorm';

import JSONa from 'graphql-type-json';
import { Tour } from 'src/tour/entities/tour.entity';
@ObjectType()
@Entity({ name: 'tour_profiles' })
export class TourProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tour_id: number;

  @Field(() => JSONa)
  @Column({ type: 'jsonb' })
  values: JSON;

  @ManyToOne(() => Tour, (tour) => tour.tour_profiles)
  @JoinColumn({ name: 'tour_id' })
  owner: Tour;
}
