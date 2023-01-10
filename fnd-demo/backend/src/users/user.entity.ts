// user/user.entity.ts

import { Ewallet } from 'src/ewallet/ewallet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar', unique: true })
  email?: string;

  @Column({ type: 'varchar' })
  password?: string;

  @Column({ type: 'varchar', unique: true })
  username?: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  address?: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  pk?: string;

  @OneToMany(() => Ewallet, (ewallet) => ewallet.user)
  ewallets?: Ewallet[];
}
