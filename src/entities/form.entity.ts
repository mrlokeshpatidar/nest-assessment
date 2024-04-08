import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
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
