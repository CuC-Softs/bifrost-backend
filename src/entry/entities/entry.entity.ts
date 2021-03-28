import { ObjectType, Field, Int } from '@nestjs/graphql';
import Media from 'src/media/media.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'entries' })
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_in_list: number;

  @Column({ type: 'date' })
  date: Date;
}
