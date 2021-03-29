import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
@ObjectType()
export default class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  name: string;

  @Field()
  get url(): string {
    return process.env.API_HOST + this.path;
  }

  @OneToOne(() => User)
  @JoinColumn()
  cover_media: Media;
}
