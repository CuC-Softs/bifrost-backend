import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'tourProfile' })
export class TourProfile {
  @Column()
  @OneToOne(() =>TourProfile)
  user_id: String;

  @Column()
  name: String;
}
