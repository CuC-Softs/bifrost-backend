import { ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToOne,
} from 'typeorm';

@ObjectType()
@Entity({name: 'tours'})
export class Tour {
  @Column()
  name: String;

  @ManyToOne(() => Tour)
  @Column()
  user_id: String;

  @OneToOne(() => Tour)
  @Column()
  tour_profile_id: Int16Array;

  @Column()
  isPublic: Boolean;
}
