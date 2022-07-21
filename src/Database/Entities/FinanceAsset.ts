import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('financial_assets')
export class FinanceAsset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  ativo: string;
  
  @Column({ type: 'integer' })
  valor: number;

  @CreateDateColumn({ type: 'timestamp', default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: 'now()' })
  updated_at: Date;

  constructor() {
    if (!this.id) this.ativo = uuid();
  }
}
