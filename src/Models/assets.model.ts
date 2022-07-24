import { FinanceAssetRepository } from "../Database/Repositores/FinanceAsset.repository";
import { assetType } from "../Types/Asset.type";

export class AssetsModel {
  async getAllAssets() {
    const allAssets = await FinanceAssetRepository.find();
    return allAssets as assetType[];
  }

  async getOneAsset(asset_code: number) {
    const Assets = await FinanceAssetRepository.findOneBy({ asset_code });
    return Assets as assetType;
  }

  async updateInformations(updateObject: assetType) {
    await FinanceAssetRepository.save(updateObject);
    return "Asset updated"
  };
}