import { ObjectType } from '@nestjs/graphql';
import Media from 'src/media/media.entity';
import { Column, CreateDateColumn } from 'typeorm';

export class Entry {
  @Column()
  type_fk: string;

  @CreateDateColumn({ type: 'date' })
  date: Date;

  @Column()
  value: string;
}
