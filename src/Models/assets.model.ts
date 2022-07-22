import { StatusCodes } from "http-status-codes";
import ErrorHandle from "../Class/error";
import { FinanceAssetRepository } from "../Database/Repositores/FinanceAsset.repository";
import { assetType } from "../Types/Asset.type";

export class AssetsModel {
  async all() {
    const allAssets = await FinanceAssetRepository.find();
    return allAssets as assetType[];
  }

  async one(asset_code: number) {
    const Assets = await FinanceAssetRepository.findOneBy({ asset_code });
    return Assets as assetType;
  }

  async autoUpdate({asset_code, value}: assetType) {
    const Assets = await FinanceAssetRepository.findOneBy({ asset_code });

    if (!Assets) throw new ErrorHandle(StatusCodes.BAD_REQUEST,'Assets deleted of database');

    Assets.value = value ? value : Assets.value;
    
    return FinanceAssetRepository.save(Assets);
  }
}