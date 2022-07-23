import { StatusCodes } from "http-status-codes";
import ErrorHandle from "../Class/error";
import { FinanceAssetRepository } from "../Database/Repositores/FinanceAsset.repository";
import { UserRepository } from "../Database/Repositores/User.repository";
import { UserAssetRepository } from "../Database/Repositores/UserAsset.repository";
import { AssetsModel } from "../Models/assets.model";
import { InvestimentModel } from "../Models/investiment.model";
import { UserModel } from "../Models/user.model";
import { investimentType } from "../Types/investimentType";

export class InvestimentService {
  async buy( userLogged: any, purchaseInformations: investimentType) {
    if (Number(userLogged.client_code) !== Number(purchaseInformations.codCliente)) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'User is not permission')
    }

    const userInstance = new UserModel().one;
    const user = await userInstance(Number(purchaseInformations.codCliente));

    if(!user) {
      throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'Client is not exists');
    }
    
    const assetInstance = new AssetsModel().one;
    const asset = await assetInstance(Number(purchaseInformations.codAtivo));
  
    if(!asset) {
      throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'Asset is not exists');
    }


    if(Number(asset.amount_assets) <= 0 || Number(purchaseInformations.qtdeAtivo) > Number(asset.amount_assets)) {
      throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'There are not enough to buy');
    }
    if(
      Number(user.balance) <= 0
      || (Number(purchaseInformations.qtdeAtivo) * Number(asset.unit_value)) > Number(user.balance)
    ) {
      throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'Insufficient balance for purchase');
    }

    user.balance = Number(user.balance) - (Number(purchaseInformations.qtdeAtivo) * Number(asset.unit_value));
    await UserRepository.save(user);
    asset.amount_assets = Number(asset.amount_assets) - Number(purchaseInformations.qtdeAtivo);
    await FinanceAssetRepository.save(asset);

    const buyInformations = {
      client_code: Number(purchaseInformations.codCliente),
      asset_code: Number(purchaseInformations.codAtivo),
      amount_asset: Number(purchaseInformations.qtdeAtivo),
      unit_value: Number(asset.unit_value),
    }

    const userAssetInstance = new InvestimentModel();

    const hasUserAssets: Array<any> = await userAssetInstance
      .one(purchaseInformations.codCliente, purchaseInformations.codAtivo);

    console.log(hasUserAssets[0]);

    if(!hasUserAssets[0]) await userAssetInstance.add(buyInformations);
    else {
      hasUserAssets[0].amount_asset = Number(hasUserAssets[0].amount_asset) 
        + Number(purchaseInformations.qtdeAtivo)
      
      await UserAssetRepository.save(hasUserAssets[0]);
    }
    return "Compra concluída com sucesso"
  }
}
