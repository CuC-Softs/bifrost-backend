import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/user.entity';
import { TourProfile } from 'src/tour-profile/entities/tour-profile.entity';
import { Entry } from 'src/entry/entities/entry.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { Report } from 'src/report/entities/report.entity';
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

  @OneToMany(() => Entry, (entry) => entry.tour)
  @JoinTable({
    name: 'tour_entries',
    inverseJoinColumn: {
      name: 'tour_id',
      referencedColumnName: 'id',
    },
    joinColumn: {
      name: 'entry_id',
      referencedColumnName: 'id',
    },
  })
  entries: Entry[];

  @ManyToMany(() => Tag, (tag) => tag.tour)
  @JoinTable({
    name: 'tour_tags',
    joinColumn: {
      name: 'tour_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_name',
      referencedColumnName: 'name',
    },
  })
  tag: Tag[];

  @OneToMany(() => Report, (report) => report.tour)
  @JoinTable({
    name: 'tour_reports',
    inverseJoinColumn: {
      name: 'tour_id',
      referencedColumnName: 'id',
    },
    joinColumn: {
      name: 'report_id',
      referencedColumnName: 'id',
    },
  })
  reports: Report[];
}
