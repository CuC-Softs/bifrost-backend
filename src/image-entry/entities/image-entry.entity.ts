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
@Entity({ name: 'image_entry' })
export class ImageEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  media_fk: number;

  @Column()
  location: string;

  @Column()
  entry_fk: number;

  @OneToOne(() => Media)
  @JoinColumn()
  image: Media;
}
