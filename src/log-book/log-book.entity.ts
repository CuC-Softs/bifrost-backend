import { ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'logBooks' })
export class LogBook {
  @Column()
  name: String;

  @Column()
  @ManyToOne(() =>LogBook)
  user_id: String;

  @Column()
  @OneToOne(() =>LogBook)
  tour_id: Int16Array;
}
