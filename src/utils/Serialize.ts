import { assetType } from "../Types/Asset.type";
import { investimentType } from "../Types/investimentType";
import { userAssetType } from "../Types/UserAsset.type";

export const SerializeAssets = (assets: assetType) => {
  return {
    codAtivo: assets.asset_code,
    NomeAtivo: assets.name,
    QtdeAtivo: assets.amount_assets,
    Valor: assets.unit_value,
  };
};

export const SerializeForGetUserAssets = (userAsset: userAssetType) => {
  return {
    CodAtivo: userAsset.asset_code,
    QtdeAtivo: userAsset.amount_asset,
    Valor: userAsset.unit_value,
  };
};

export const SerializeForAddUserAssets = (
  client_code: number,
  purchaseInformations: investimentType,
  unit_value: number,
) => {
  return {
    client_code: client_code,
    asset_code: Number(purchaseInformations.codAtivo),
    amount_asset: Number(purchaseInformations.qtdeAtivo),
    unit_value: unit_value,
  };
};
