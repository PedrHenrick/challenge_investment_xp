import { assetType } from "../Types/Asset.type";

export const Serialize = (assets: assetType) => () => {
  return {
    codAtivo: assets.asset_code,
    NomeAtivo: assets.name,
    QtdeAtivo: assets.amount_assets,
    Valor: assets.unit_value,
  }
};
