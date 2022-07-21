import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('financial_assets')
export class FinanceAsset {
  @PrimaryColumn({ type: 'uuid', default: uuid() })
  id: string;

  @Column({ type: 'varchar', unique: true })
  ativo: string;
  
  @Column({ type: 'integer' })
  valor: number;

  @CreateDateColumn({ type: 'timestamp', default: 'now()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: 'now()' })
  updated_at: Date;
}
