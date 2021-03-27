import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import Media from 'src/media/media.entity';
import {
    Column,
    Entity,
    PrimaryColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
} from 'typeorm';
@ObjectType()
@Entity({ name: 'recommendations' })
export class Recommendation {
    @Column()
    type: string;

    @Column()
    value: string;

    @ManyToOne(() => Recommendation)
    @JoinColumn()
    user_id: string;
}
