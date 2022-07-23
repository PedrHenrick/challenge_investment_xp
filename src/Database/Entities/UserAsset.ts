import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity('users_assets')
export class UserAsset {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number

  @Column({ type: 'integer' })
  client_code: number;

  @Column({ type: 'integer' })
  asset_code: number;

  @Column({ type: 'integer' })
  amount_asset: number;

  @Column({ type: 'decimal' })
  unit_value: number;
}
