import { assetType } from "../Types/Asset.type";
import { userAssetType } from "../Types/UserAsset.type";

export const SerializeAssets = (assets: assetType) => () => {
  return {
    codAtivo: assets.asset_code,
    NomeAtivo: assets.name,
    QtdeAtivo: assets.amount_assets,
    Valor: assets.unit_value,
  }
};

export const SerializeUserAssets = (userAsset: userAssetType) => {
  const userAssetsSerialized = {
    CodAtivo: userAsset.asset_code,
    QtdeAtivo: userAsset.amount_asset,
    Valor: userAsset.unit_value,
  };
  return userAssetsSerialized;
}
