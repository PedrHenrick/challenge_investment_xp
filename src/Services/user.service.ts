import { StatusCodes } from 'http-status-codes';
import ErrorHandle from '../Class/error';
import { UserRepository } from '../Database/Repositores/User.repository';
import { InvestimentModel } from '../Models/investiment.model';
import { UserModel } from '../Models/user.model';
import { userAssetType } from '../Types/UserAsset.type';

const SerializeUserAssets = (userAsset: userAssetType) => {
  const userAssetsSerialized = {
    CodCliente: userAsset.client_code,
    CodAtivo: userAsset.asset_code,
    QtdeAtivo: userAsset.amount_asset,
    Valor: userAsset.unit_value,
  };
  return userAssetsSerialized;
}

export class UserService {
  async getBalance(userLogged: any, codCliente: number) {
    if (Number(userLogged.client_code) !== Number(codCliente)) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'User is not permission')
    }

    const userModel = new UserModel().one; 
    const user = await userModel(codCliente);

    if(!user) {
      throw new ErrorHandle(StatusCodes.INTERNAL_SERVER_ERROR, "Internal error contact support")
    }
    
    return {
      CodCliente: codCliente,
      Saldo: user.balance,
    };
  }

  async getAssets(userLogged: any, codCliente: number) {
    if (Number(userLogged.client_code) !== Number(codCliente)) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'User is not permission')
    }

    const userModel = new UserModel().one; 
    const user = await userModel(codCliente);

    if(!user) {
      throw new ErrorHandle(StatusCodes.INTERNAL_SERVER_ERROR, "Internal error contact support")
    }

    const investimentModel = new InvestimentModel().getUserAsset; 
    const userAssets = await investimentModel(codCliente);

    if(!userAssets) {
      throw new ErrorHandle(StatusCodes.BAD_REQUEST, "The User does not have any shares purchased")
    }

    const userAssetsSerialized = userAssets
      .map((userAsset) => SerializeUserAssets(userAsset));
    
    return userAssetsSerialized;
  }

  async addWithdraw(userLogged: any, informationWithdraw: any) {
    if (Number(userLogged.client_code) !== Number(informationWithdraw.CodCliente)) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'User is not permission')
    }
    
    const userModel = new UserModel().one; 
    const user = await userModel(informationWithdraw.CodCliente);
    
    if(!user) {
      throw new ErrorHandle(StatusCodes.INTERNAL_SERVER_ERROR, "Internal error contact support")
    }

    if((Number(user.balance) - Number(informationWithdraw.Valor)) < 0) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, "Transaction denied")
    }

    user.balance = Number(user.balance) - Number(informationWithdraw.Valor);
    
    await UserRepository.save(user);
    
    return "Saque realizado com sucesso!"
  }

  async addDeposit(userLogged: any, informationWithdraw: any) {
    if (Number(userLogged.client_code) !== Number(informationWithdraw.CodCliente)) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'User is not permission')
    }
    
    const userModel = new UserModel().one; 
    const user = await userModel(informationWithdraw.CodCliente);
    
    if(!user) {
      throw new ErrorHandle(StatusCodes.INTERNAL_SERVER_ERROR, "Internal error contact support")
    }

    user.balance = Number(user.balance) + Number(informationWithdraw.Valor);
    await UserRepository.save(user);
    
    return "Depósito realizado com sucesso!"
  }
}
