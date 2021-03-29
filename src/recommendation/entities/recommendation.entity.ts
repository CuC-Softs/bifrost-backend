import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Report } from 'src/report/entities/report.entity';
import { Vote } from 'src/vote/entities/vote.entity';

@Entity({ name: 'recomendations' })
@ObjectType()
export class Recommendation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, (user) => user.recommendations)
  @JoinColumn({ name: 'user_id' })
  owner: User;

  @OneToMany(() => Comment, (comment) => comment.recomendation)
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

  @OneToMany(() => Report, (report) => report.recommendation)
  @JoinTable({
    name: 'recommendation_reports',
    joinColumn: {
      name: 'recomendation_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'report_id',
      referencedColumnName: 'id',
    },
  })
  reports: Report[];

  @OneToMany(() => Vote, (vote) => vote.recommendation)
  @JoinTable({
    name: 'recommendation_votes',
    joinColumn: {
      name: 'recomendation_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'vote_id',
      referencedColumnName: 'id',
    },
  })
  votes: Vote[];
}
