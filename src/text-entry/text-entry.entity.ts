import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'locationEntry' })
export class VideoEntry {
    @JoinColumn()
    media_fk: number;

    @Column()
    text: string;

    @JoinColumn()
    entry_fk: number;
}
