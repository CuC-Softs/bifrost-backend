import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { LogBook } from 'src/log-book/entities/log-book.entity';
import Media from 'src/media/media.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Recommendation } from 'src/recommendation/entities/recommendation.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Report } from 'src/report/entities/report.entity';
import { Tour } from 'src/tour/entities/tour.entity';
import { Vote } from 'src/vote/entities/vote.entity';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Column()
  @PrimaryColumn()
  uid: string;

  @Column()
  name: string;

  @Column({ name: 'cover_media' })
  coverMedia: number;

  @Column({ name: 'is_public' })
  isPublic: boolean;

  @OneToOne(() => Media)
  @JoinColumn({ name: 'cover_media' })
  @Field({ nullable: true })
  cover: Media;

  @Field()
  followersCount: number;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'follows',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'uid',
    },
    inverseJoinColumn: {
      name: 'followed_id',
      referencedColumnName: 'uid',
    },
  })
  followedUsers: User[];

  @OneToMany(() => LogBook, (logBook) => logBook.owner)
  logBooks: LogBook[];

  @OneToMany(() => Recommendation, (recommendation) => recommendation.owner)
  recommendations: Recommendation[];

  @OneToMany(() => Comment, (comment) => comment.owner)
  comments: Comment[];

  @OneToMany(() => Report, (report) => report.owner)
  reports: Report[];

  @OneToMany(() => Tour, (tour) => tour.owner)
  tours: Tour[];

  @OneToMany(() => Vote, (vote) => vote.owner)
  votes: Vote[];
}
