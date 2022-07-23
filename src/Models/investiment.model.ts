import { UserAssetRepository } from "../Database/Repositores/UserAsset.repository";

export class InvestimentModel {
  async one(client_code: number, asset_code: number) {
    const assetExisting = await UserAssetRepository.find({ where: { client_code, asset_code } });
    return UserAssetRepository.save(assetExisting);
  }
  
  async add(buyInformations: any) {
    const userAsset = UserAssetRepository.create(buyInformations);
    return UserAssetRepository.save(userAsset);
  }
}