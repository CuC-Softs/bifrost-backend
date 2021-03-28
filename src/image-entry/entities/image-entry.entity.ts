import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entry } from 'src/entry/entities/entry.entity';
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
@Entity({ name: 'image_entry' })
export class ImageEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  media_id: number;

  @Column()
  location: string;

  @Column()
  entry_id: number;

  @OneToOne(() => Media)
  @JoinColumn()
  image: Media;

  @OneToOne(() => Entry)
  @JoinColumn({ name: 'entry_id' })
  entry: Entry;
}
