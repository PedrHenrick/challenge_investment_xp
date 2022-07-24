import { StatusCodes } from "http-status-codes";
import { ErrorHandle } from "../Class/error";
import { AssetsModel } from "../Models/assets.model";
import { assetType } from "../Types/Asset.type";
import getRandomInt from "../utils/getRandomInt";
import { SerializeAssets } from "../utils/Serialize";

export class AssetsService {
  async getAllAssets(): Promise<Array<Object>> {
    const assetsInstance = new AssetsModel();
    const allAssets = await assetsInstance.getAllAssets();

    const allAssetsSerialized = allAssets
      .map((asset: assetType) => SerializeAssets(asset));
    return allAssetsSerialized;
  }

  async autoUpdateValues(): Promise<string> {
    const assetsInstance = new AssetsModel();
    const allAssets = await assetsInstance.getAllAssets();

    await Promise.all<any>(allAssets.map(async (assets: assetType) => {
      switch (getRandomInt(1, 4)) {
        case 1:
          assets.unit_value = Number(
            (Number(assets.unit_value) 
            + (
              Number(assets.unit_value) * (getRandomInt(1, 3) / 100)
            )
            ).toFixed(2)
          );
          await assetsInstance.updateInformations(assets);
          break;
        case 2:
          assets.unit_value = Number(
            (Number(assets.unit_value) 
            - (
              Number(assets.unit_value) * (getRandomInt(1, 3) / 100)
            )
            ).toFixed(2)
          );
          await assetsInstance.updateInformations(assets);
          break;
        default:
          break;
      }
    }));
    return 'Atualizado';
  };

  async getOneAsset(codAtivo: number): Promise<Object> {
    const assetsInstance = new AssetsModel();
    const asset = await assetsInstance.getOneAsset(codAtivo);

    if (!asset) throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'Asset is not exists');
    
    return SerializeAssets(asset);
  }
};
