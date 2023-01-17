// histories/history.entity.ts

import { NFT } from 'src/nfts/nft.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HistoryType } from './histories.enum';

@Entity('histories')
export class History {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('numeric', { default: 0 })
  public price?: number;

  @Column('numeric', { default: 1 })
  public amount?: number;

  @Column('numeric')
  public type: HistoryType;

  @ManyToOne(() => User, { cascade: true })
  public seller: User;

  @ManyToOne(() => User, { cascade: true })
  public buyer: User;

  @ManyToOne(() => NFT, { cascade: true })
  public nft: NFT;
}