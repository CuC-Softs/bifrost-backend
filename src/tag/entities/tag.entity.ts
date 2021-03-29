import { ObjectType, Field, Int } from '@nestjs/graphql';
import { LogBook } from 'src/log-book/entities/log-book.entity';
import { Tour } from 'src/tour/entities/tour.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'tags' })
export class Tag {
  @PrimaryColumn()
  name: string;

  @Column()
  value: string;

  @ManyToMany(() => LogBook, (logBook) => logBook.tag)
  @JoinTable({
    name: 'log_book_tags',
    joinColumn: {
      name: 'tag_name',
      referencedColumnName: 'name',
    },
    inverseJoinColumn: {
      name: 'log_book_id',
      referencedColumnName: 'id',
    },
  })
  log_book: LogBook[];

  @ManyToMany(() => Tour, (tour) => tour.tag)
  @JoinTable({
    name: 'tour_tags',
    joinColumn: {
      name: 'tag_name',
      referencedColumnName: 'name',
    },
    inverseJoinColumn: {
      name: 'tour_id',
      referencedColumnName: 'id',
    },
  })
  tour: Tour[];
}
