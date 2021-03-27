import { ObjectType } from '@nestjs/graphql';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'reports' })
export class Report {
    @ManyToOne(() =>Report)
    @JoinColumn()
    user_id: string;

    @Column()
    type: string;

    @Column()
    justification: string;
}
