import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    Entity,
    PrimaryColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'reports' })
export class Report {
    @Column()
    user_id: string;

    @Column()
    type: string;

    @Column()
    justification: string;
}
