import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
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

  @ManyToMany(() => User)
  @JoinColumn({ name: 'follows' })
  followedUsers: User[];
}
