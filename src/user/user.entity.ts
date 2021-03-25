import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Column()
  @PrimaryColumn()
  uid: string;

  @Column()
  name: string;

  @Column()
  cover_media: number;

  @Column()
  is_public: boolean;
}
