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
@Entity({ name: 'tours' })
export class Tour {
  @Column()
  name: string;

  @ManyToOne(() => Tour)
  @Column()
  user_id: string;

  @OneToOne(() => Tour)
  @Column()
  tour_profile_id: number;

  @Column()
  isPublic: boolean;
}
