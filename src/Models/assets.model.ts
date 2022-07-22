import { FinanceAssetRepository } from "../Database/Repositores/FinanceAsset.repository";

type AssetsInformations = {
  asset_code: number,
  name?: string,
  value: number,
  amount_assets?: number
}

export class AssetsModel {
  async all() {
    const allAssets = await FinanceAssetRepository.find();
    return allAssets as AssetsInformations[];
  }

  async autoUpdate({asset_code, value}: AssetsInformations) {
    const Assets = await FinanceAssetRepository.findOneBy({ asset_code });

    if (!Assets) throw new Error('Assets deleted of database');

    Assets.value = value ? value : Assets.value;
    
    return FinanceAssetRepository.save(Assets);
  }
}