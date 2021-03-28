import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
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
  comment_id: number;

  @Column()
  text: string;
}
