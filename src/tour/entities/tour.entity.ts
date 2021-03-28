import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { TourProfile } from 'src/tour-profile/entities/tour-profile.entity';

@Entity({ name: 'tours' })
@ObjectType()
export class Tour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  user_id: string;

  @Column()
  tour_profile_id: number;

  @Column()
  is_public: boolean;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.tours)
  @JoinColumn({ name: 'user_id' })
  owner: User;

  @OneToMany(() => TourProfile, (tourProfile) => tourProfile.owner)
  tour_profiles: TourProfile[];
}
