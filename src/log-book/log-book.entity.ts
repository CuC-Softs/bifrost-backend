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
  name: string;

  @Column()
  @ManyToOne(() => LogBook)
  user_id: string;

  @Column()
  @OneToOne(() => LogBook)
  tour_id: number;
}
