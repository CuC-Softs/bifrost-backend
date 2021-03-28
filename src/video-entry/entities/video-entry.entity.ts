import { ObjectType, Field, Int } from '@nestjs/graphql';
import Media from 'src/media/media.entity';
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
} from 'typeorm';

@Entity({ name: 'video_entry' })
@ObjectType()
export class VideoEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  media_id: number;

  @Column()
  entry_id: number;

  @Column()
  location: string;
}
