import { StatusCodes } from "http-status-codes";
import { ErrorHandle } from "../Class/error";
import { AssetsModel } from "../Models/assets.model";
import { assetType } from "../Types/Asset.type";
import getRandomInt from "../utils/getRandomInt";
import { SerializeAssets } from "../utils/Serialize";

export class AssetsService {
  async getAllAssets() {
    const assetsInstance = new AssetsModel();
    const allAssets = await assetsInstance.getAllAssets();

    const allAssetsSerialized = allAssets
      .map((asset) => SerializeAssets(asset));
    return allAssetsSerialized;
  }

  async autoUpdateValues() {
    const assetsInstance = new AssetsModel();
    const allAssets = await assetsInstance.getAllAssets();

    await Promise.all<any>(allAssets.map(async (assets) => {
      switch (getRandomInt(1, 3)) {
        case 1:
          assets.unit_value = Number(assets.unit_value)
            + (Number(assets.unit_value) * (getRandomInt(1, 2) / 100));
          await assetsInstance.autoUpdateValues({
            asset_code: assets.asset_code,
            unit_value: Number((assets.unit_value).toFixed(2)),
          });
          break;
        case 2:
          assets.unit_value = Number(assets.unit_value)
            - (Number(assets.unit_value) * (getRandomInt(1, 2) / 100));
          await assetsInstance.autoUpdateValues({
            asset_code: assets.asset_code,
            unit_value: Number((assets.unit_value).toFixed(2)),
          });
          break;
        default:
          await assetsInstance.autoUpdateValues({
            asset_code: assets.asset_code,
            unit_value: Number((assets.unit_value).toFixed(2)),
          });
      }
    }));
    return 'Atualizado';
  };

  async getOneAsset(codAtivo: number) {
    const assetsInstance = new AssetsModel();
    const asset = await assetsInstance.getOneAsset(codAtivo);

    if (!asset) throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'Asset is not exists');
    
    return SerializeAssets(asset);
  }
};
