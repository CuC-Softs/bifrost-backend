import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Recommendation } from 'src/recommendation/entities/recommendation.entity';
import { User } from 'src/user/user.entity';
import { LogBook } from 'src/log-book/entities/log-book.entity';
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
  ManyToOne,
} from 'typeorm';
@ObjectType()
@Entity({ name: 'votes' })
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  is_public: boolean;

  @ManyToOne(() => User, (user) => user.votes)
  @JoinColumn({ name: 'user_id' })
  owner: User;

  @OneToMany(() => Recommendation, (recommendation) => recommendation.votes)
  @JoinTable({
    name: 'recommendation_votes',
    joinColumn: {
      name: 'vote_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'recommmendation_id',
      referencedColumnName: 'id',
    },
  })
  recommendation: Recommendation;

  @ManyToOne(() => LogBook, (logBook) => logBook.votes)
  @JoinTable({
    name: 'log_book_votes',
    joinColumn: {
      name: 'vote_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'log_book_id',
      referencedColumnName: 'id',
    },
  })
  logBook: LogBook;
}
