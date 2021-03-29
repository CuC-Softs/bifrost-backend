import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.entity';
import { Recommendation } from 'src/recommendation/entities/recommendation.entity';
import { User } from 'src/user/user.entity';
import { LogBook } from 'src/log-book/entities/log-book.entity';
import { Tour } from 'src/tour/entities/tour.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
} from 'typeorm';
@Entity({ name: 'reports' })
@ObjectType()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  type: string;

  @Column()
  justification: string;

  @ManyToOne(() => User, (user) => user.reports)
  @JoinColumn({ name: 'user_id' })
  owner: User;

  @OneToMany(() => Comment, (comment) => comment.reports)
  @JoinTable({
    name: 'recommendation_comments',
    joinColumn: {
      name: 'recomendation_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'comment_id',
      referencedColumnName: 'id',
    },
  })
  comments: Comment[];

  @OneToMany(() => Recommendation, (recommendation) => recommendation.reports)
  @JoinTable({
    name: 'recommendation_reports',
    joinColumn: {
      name: 'report_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'recommendation_id',
      referencedColumnName: 'id',
    },
  })
  recommendation: Recommendation;

  @OneToOne(() => LogBook)
  @JoinTable({
    name: 'log_book_reports',
    joinColumn: {
      name: 'report_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'log_book_id',
      referencedColumnName: 'id',
    },
  })
  log_book: LogBook;

  @ManyToOne(() => Tour, (tour) => tour.reports)
  @JoinTable({
    name: 'tour_reports',
    inverseJoinColumn: {
      name: 'report_id',
      referencedColumnName: 'id',
    },
    joinColumn: {
      name: 'tour_id',
      referencedColumnName: 'id',
    },
  })
  tour: Tour;
}
