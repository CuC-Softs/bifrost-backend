import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'tour' })
export class Tour {
  @PrimaryGeneratedColumn()
  id: number;
}
