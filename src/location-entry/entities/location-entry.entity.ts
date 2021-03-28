import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entry } from 'src/entry/entities/entry.entity';
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
@Entity({ name: 'location-entry' })
export class LocationEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  entry_id: number;

  @OneToOne(() => Entry)
  @JoinColumn({ name: 'entry_id' })
  entry: Entry;
}
