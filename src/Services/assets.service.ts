import { AssetsModel } from "../Models/assets.model";
import getRandomInt from "../utils/getRandomInt";

export class AssetsService {
  async all() {
    const Database = new AssetsModel();
    const allAssets = await Database.all();
    return allAssets;
  }

  async autoUpdate() {
    const assetsInstance = new AssetsModel();
    const allAssets = await assetsInstance.all();

    Promise.all<any>(allAssets.map(async (assets) => {
      switch (getRandomInt(1, 3)) {
        case 1:
          assets.value += (assets.value * (getRandomInt(1, 1) / 100));
          await assetsInstance.autoUpdate({
            asset_code: assets.asset_code,
            value: Math.round(assets.value),
          });
          break;
        case 2:
          assets.value -= (assets.value * (getRandomInt(1, 3) / 100));
          await assetsInstance.autoUpdate({
            asset_code: assets.asset_code,
            value: Math.round(assets.value),
          });
          break;
        default:
          await assetsInstance.autoUpdate({
            asset_code: assets.asset_code,
            value: Math.round(assets.value),
          });
      }
    }));
    return 'Atualizado';
  };
}