import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('financial_assets')
export class FinanceAsset {
  @PrimaryColumn({ default: uuid() })
  id: string;

  @Column({ type: 'text', unique: true })
  ativo: string;
  
  @Column({ type: 'number' })
  valor: number;
}
