import {
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity('users_assets')
export class UserAsset {
  @PrimaryGeneratedColumn({ type: 'integer' })
  client_code: number;

  @PrimaryGeneratedColumn({ type: 'integer' })
  asset_code: number;
}
