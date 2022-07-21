import { FinanceAssetRepository } from "../Database/Repositores/FinanceAsset.repository";

export class DatabaseModel {
  async all() {
    const allAssets = await FinanceAssetRepository.find();
    return allAssets;
  }
}