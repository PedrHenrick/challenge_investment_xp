import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FinanceAsset } from "./FinanceAsset";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  client_code: number;

  @Column({ type: 'varchar' })
  fullName: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  password: string;
  
  @Column({ type: 'decimal', default: 0 })
  balance: number;
}
