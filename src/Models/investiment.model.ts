import { UserAssetRepository } from "../Database/Repositores/UserAsset.repository";
import { assetType } from "../Types/Asset.type";

export class InvestimentModel {
  async getOneUserAsset(client_code: number, asset_code: number) {
    const assetExisting = await UserAssetRepository.find({ where: { client_code, asset_code } });
    return UserAssetRepository.save(assetExisting);
  }

  async getUserAsset(client_code: number) {
    const assetExisting = await UserAssetRepository.find({ where: { client_code } });
    return UserAssetRepository.save(assetExisting);
  }
  
  async addUserAsset(buyInformations: assetType) {
    const userAsset = UserAssetRepository.create(buyInformations);
    return UserAssetRepository.save(userAsset);
  }

  async updateInformations(updateObject: assetType) {
    await UserAssetRepository.save(updateObject);
    return "userAsset updated"
  };

  async deleteInformations(deleteObject: assetType) {
    await UserAssetRepository.delete(deleteObject);
    return "userAsset deleted"
  };
}