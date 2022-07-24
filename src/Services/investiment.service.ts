import { StatusCodes } from "http-status-codes";
import { ErrorHandle } from "../Class/error";
import { AssetsModel } from "../Models/assets.model";
import { InvestimentModel } from "../Models/investiment.model";
import { ClientModel } from "../Models/client.model";
import { investimentType } from "../Types/investimentType";
import { SerializeForAddUserAssets } from "../utils/Serialize";
import { userAssetType } from "../Types/UserAsset.type";

export class InvestimentService {
  async buy(userLogged: any, purchaseInformations: investimentType): Promise<string> {
    const clientModelInstance = new ClientModel;
    const user = await clientModelInstance.getOneUser(Number(userLogged.client_code));
    const assetInstance = new AssetsModel;
    const asset = await assetInstance.getOneAsset(Number(purchaseInformations.codAtivo));
  
    if(!asset) throw new ErrorHandle(
      StatusCodes.BAD_REQUEST,
      'Asset is not exists'
    );
    if(
      Number(asset.amount_assets) <= 0
      || Number(purchaseInformations.qtdeAtivo) > Number(asset.amount_assets)
    ) {
      throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'There are not enough to buy');
    };
    if(
      Number(user.balance) <= 0
      || (Number(purchaseInformations.qtdeAtivo) * Number(asset.unit_value)) > Number(user.balance)
    ) {
      throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'Insufficient balance for purchase');
    }

    user.balance = Number((Number(user.balance) 
    - (Number(purchaseInformations.qtdeAtivo) * Number(asset.unit_value))).toFixed(2));
    await clientModelInstance.updateInformations(user)

    asset.amount_assets = Number(asset.amount_assets)
    - Number(purchaseInformations.qtdeAtivo);
    await assetInstance.updateInformations(asset);

    const buyInformations = SerializeForAddUserAssets(
      userLogged.client_code,
      purchaseInformations,
      asset.unit_value,
    );

    const userAssetInstance = new InvestimentModel();
    const hasUserAssets: Array<any> = await userAssetInstance
      .getOneUserAsset(userLogged.client_code, purchaseInformations.codAtivo);

    if(!hasUserAssets[0]) await userAssetInstance.addUserAsset(buyInformations);
    else {
      hasUserAssets[0].amount_asset = Number(hasUserAssets[0].amount_asset) 
        + Number(purchaseInformations.qtdeAtivo)
      await userAssetInstance.updateInformations(hasUserAssets[0]);
    }
    return "Compra concluída com sucesso"
  }

  async sale( userLogged: any, saleInformations: investimentType): Promise<string> {
    const clientModelInstance = new ClientModel;
    const user = await clientModelInstance.getOneUser(Number(userLogged.client_code));
    const assetInstance = new AssetsModel();
    const asset = await assetInstance.getOneAsset(Number(saleInformations.codAtivo));

    if(!asset) throw new ErrorHandle(
      StatusCodes.BAD_REQUEST,
      'Asset is not exists'
    );

    const userAssetInstance = new InvestimentModel();
    const hasUserAssets: userAssetType[] = await userAssetInstance
    .getOneUserAsset(userLogged.client_code, saleInformations.codAtivo);

    if(!hasUserAssets[0]) throw new ErrorHandle(
      StatusCodes.BAD_REQUEST,
      'You do not have this asset in your wallet'
    );
    if(Number(saleInformations.qtdeAtivo) > Number(hasUserAssets[0].amount_asset)) {
      throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'You cannot sell more than you have in your wallet');
    }

    user.balance = Number((Number(user.balance) 
    + (Number(saleInformations.qtdeAtivo) * Number(asset.unit_value))).toFixed(2));
    await clientModelInstance.updateInformations(user);
    asset.amount_assets = Number(asset.amount_assets) + Number(saleInformations.qtdeAtivo);
    await assetInstance.updateInformations(asset);


    if((Number(hasUserAssets[0].amount_asset) - Number(saleInformations.qtdeAtivo)) === 0) {
      await userAssetInstance.deleteInformations(hasUserAssets[0]);
    } else {
      hasUserAssets[0].amount_asset = Number(hasUserAssets[0].amount_asset) 
        - Number(saleInformations.qtdeAtivo)
      await userAssetInstance.addUserAsset(hasUserAssets[0]);
    }

    return "Venda concluída com sucesso"
  }
}
