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

@Entity({ name: 'text_entry' })
@ObjectType()
export class TextEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  entry_fk: number;
}
