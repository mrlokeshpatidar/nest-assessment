import { Entity, Column, PrimaryColumn, Unique } from 'typeorm';

@Entity()
@Unique(['title'])
export class FormData {
  @PrimaryColumn('uuid')
  uniqueId: string;

  @Column()
  title: string;
}
