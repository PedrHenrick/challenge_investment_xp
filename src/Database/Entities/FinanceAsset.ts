import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity('financial_assets')
export class FinanceAsset {
  @PrimaryGeneratedColumn({ type: 'integer' })
  asset_code: number;

  @Column({ type: 'varchar', unique: true })
  name: string;
  
  @Column({ type: 'decimal' })
  value: number;

  @Column({ type: 'integer' })
  amount_assets: number;

  @ManyToMany(() => User, user => user.financeAsset)
  user: User[]
}
