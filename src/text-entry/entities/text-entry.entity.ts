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

@Entity({ name: 'text_entry' })
@ObjectType()
export class TextEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  entry_id: number;

  @OneToOne(() => Entry)
  @JoinColumn({ name: 'entry_id' })
  entry: Entry;
}
