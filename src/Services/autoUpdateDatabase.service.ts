import { DatabaseModel } from "../Models/database.model";
import getRandomInt from "../utils/getRandomInt";
import { AutoUpdateDatabaseModel } from '../Models/autoUpdateDatabase.model'

export class AutoUpdateDatabaseService {
  async autoUpdate() {
    const Database = new DatabaseModel();
    const allAssets = await Database.all();

    const autoUpdateInstance = new AutoUpdateDatabaseModel();

    Promise.all<any>(allAssets.map(async (assets) => {
      switch (getRandomInt(1, 3)) {
        case 1:
          assets.valor += (assets.valor * 0.02);
          await autoUpdateInstance.autoUpdate({
            id: assets.id,
            valor: Math.round(assets.valor),
            ativo: assets.ativo
          });
          break;
        case 2:
          assets.valor -= (assets.valor * 0.02);
          await autoUpdateInstance.autoUpdate({
            id: assets.id,
            valor: Math.round(assets.valor),
            ativo: assets.ativo
          });
          break;
        default:
          await autoUpdateInstance.autoUpdate({
            id: assets.id,
            valor: Math.round(assets.valor),
            ativo: assets.ativo
          });
      }
    }))
    return 'Atualizado'
  };
}
