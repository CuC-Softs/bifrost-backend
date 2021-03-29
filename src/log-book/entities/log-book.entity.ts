import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import { Report } from 'src/report/entities/report.entity';
import { Vote } from 'src/vote/entities/vote.entity';
import { Entry } from 'src/entry/entities/entry.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'log_books' })
@ObjectType()
export class LogBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  user_id: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.logBooks)
  @JoinColumn({ name: 'user_id' })
  owner: User;

  @OneToOne(() => Report)
  @JoinTable({
    name: 'log_book_reports',
    joinColumn: {
      name: 'log_book_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'report_id',
      referencedColumnName: 'id',
    },
  })
  report: Report;

  @OneToMany(() => Vote, (vote) => vote.owner)
  @JoinTable({
    name: 'log_book_votes',
    joinColumn: {
      name: 'log_book_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'vote_id',
      referencedColumnName: 'id',
    },
  })
  votes: Vote[];

  @ManyToMany(() => Tag, (tag) => tag.log_book)
  @JoinTable({
    name: 'log_book_tags',
    joinColumn: {
      name: 'log_book_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_name',
      referencedColumnName: 'name',
    },
  })
  tag: Tag[];

  @OneToMany(() => Entry, (entry) => entry.owner)
  @JoinTable({
    name: 'log_book_entries',
    joinColumn: {
      name: 'log_book_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'entry_id',
      referencedColumnName: 'id',
    },
  })
  entries: Entry[];
}
