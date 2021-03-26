import { ObjectType } from '@nestjs/graphql';
import Media from 'src/media/media.entity';
import {
  Column,
} from 'typeorm';


export class Entry {
  @Column()
  type_fk: String;

  @Column()
  value: String;
}
