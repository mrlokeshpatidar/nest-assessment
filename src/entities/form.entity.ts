import { Entity, Column, PrimaryColumn, Unique } from 'typeorm';

@Entity()
@Unique(['title'])
export class FormData {
  @PrimaryColumn('uuid')
  uniqueId: string;

  @Column()
  title: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column({ default: false })
  isGraduate: boolean;
}
