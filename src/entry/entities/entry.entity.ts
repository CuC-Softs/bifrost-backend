import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ImageEntry } from 'src/image-entry/entities/image-entry.entity';
import { LocationEntry } from 'src/location-entry/entities/location-entry.entity';
import Media from 'src/media/media.entity';
import { TextEntry } from 'src/text-entry/entities/text-entry.entity';
import { Tour } from 'src/tour/entities/tour.entity';
import { VideoEntry } from 'src/video-entry/entities/video-entry.entity';
import { LogBook } from 'src/log-book/entities/log-book.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  ManyToOne,
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

  @OneToOne(() => VideoEntry)
  @JoinColumn({ name: 'id' })
  video_entry: VideoEntry;

  @OneToOne(() => TextEntry)
  @JoinColumn({ name: 'id' })
  text_entry: TextEntry;

  @OneToOne(() => ImageEntry)
  @JoinColumn({ name: 'id' })
  image_entry: ImageEntry;

  @OneToOne(() => LocationEntry)
  @JoinColumn({ name: 'id' })
  location_entry: LocationEntry;

  @ManyToOne(() => Tour, (tour) => tour.entries)
  @JoinTable({
    name: 'tour_entries',
    joinColumn: {
      name: 'tour_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'enrty_id',
      referencedColumnName: 'id',
    },
  })
  tour: Tour;

  @ManyToOne(() => LogBook, (logBook) => logBook.owner)
  @JoinTable({
    name: 'log_book_entries',
    joinColumn: {
      name: 'entry_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'LogBook_id',
      referencedColumnName: 'id',
    },
  })
  owner: LogBook;
}
