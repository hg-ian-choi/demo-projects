// collections/collection.entity.ts

import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('collections')
export class Collection {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar')
  name?: string;

  @Column('varchar')
  symbol?: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  address?: string;

  @ManyToOne(() => User, (user) => user.collections)
  user?: User;

  @OneToMany(() => Product, (product) => product.collection, { cascade: true })
  products?: Product[];
}
