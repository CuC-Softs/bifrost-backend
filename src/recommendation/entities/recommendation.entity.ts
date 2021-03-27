import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Recommendation {
  @PrimaryGeneratedColumn()
  id: number;
}