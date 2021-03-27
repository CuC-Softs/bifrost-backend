import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'comments' })
export class Comment {
  @OneToOne(() => Comment)
  @JoinColumn()
  comment_id: number;

  @Column()
  text: string;
}
