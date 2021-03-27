import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { LogBook } from 'src/log-book/entities/log-book.entity';
import Media from 'src/media/media.entity';
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
}
