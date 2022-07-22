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

  @Column({ type: 'varchar', unique: true })
  password: string;
  
  @Column({ type: 'decimal' })
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
