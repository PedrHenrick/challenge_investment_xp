import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FinanceAsset } from "./FinanceAsset";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  client_code: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;
  
  @Column({ type: 'decimal', default: 0 })
  balance: number;

  @ManyToMany(() => FinanceAsset, financeAsset => financeAsset.user)
  @JoinTable({
    name: 'users_assets',
    joinColumn: {
      name: 'client_code',
      referencedColumnName: 'client_code'
    },
    inverseJoinColumn: {
      name: 'asset_code',
      referencedColumnName: 'asset_code',
    }
  })
  financeAsset: FinanceAsset[]
}
