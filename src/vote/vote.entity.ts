import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'votes' })
export class Vote {
  @JoinColumn()
  user_id: string;
}
