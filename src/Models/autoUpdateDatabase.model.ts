import { FinanceAssetRepository } from "../Database/Repositores/FinanceAsset.repository";

type DatabaseInformations = {
  id: number,
  valor: number,
  ativo: string,
}

export class AutoUpdateDatabaseModel {
  async autoUpdate({id, valor, ativo}: DatabaseInformations) {
    const Assets = await FinanceAssetRepository.findOneBy({ id });

    if (!Assets) throw new Error('Assets deleted of database');

    Assets.valor = valor ? valor : Assets.valor;
    Assets.ativo = ativo ? ativo : Assets.ativo
    
    return FinanceAssetRepository.save(Assets);
  }
}