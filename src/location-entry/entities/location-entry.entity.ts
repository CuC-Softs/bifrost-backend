import { ObjectType, Field, Int } from '@nestjs/graphql';
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
  entry_fk: number;
}
