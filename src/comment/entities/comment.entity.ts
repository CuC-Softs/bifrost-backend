import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Recommendation } from 'src/recommendation/entities/recommendation.entity';
import { Report } from 'src/report/entities/report.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'comments' })
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  message: string;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  owner: User;

  @ManyToOne(() => Recommendation, (recommendation) => recommendation.comments)
  @JoinTable({
    name: 'recommendation_comments',
    joinColumn: {
      name: 'comment_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'recommendation_id',
      referencedColumnName: 'id',
    },
  })
  recomendation: Recommendation;

  @ManyToOne(() => Report, (recommendation) => recommendation.comments)
  @JoinTable({
    name: 'comment_reports',
    joinColumn: {
      name: 'comment_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'report_id',
      referencedColumnName: 'id',
    },
  })
  reports: Report[];
}
