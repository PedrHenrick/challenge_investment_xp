import { StatusCodes } from 'http-status-codes';
import { ErrorHandle } from '../Class/error';
import { InvestimentModel } from '../Models/investiment.model';
import { ClientModel } from '../Models/client.model';
import { SerializeForGetUserAssets } from '../utils/Serialize';

export class ClientService {
  async getBalance(clientLogged: any) {
    const clientModelInstance = new ClientModel().getOneUser; 
    const user = await clientModelInstance(clientLogged.client_code);
    return { Saldo: user.balance };
  }

  async getAssets(clientLogged: any) {
    const investimentModel = new InvestimentModel().getUserAsset; 
    const userAssets = await investimentModel(clientLogged.client_code);

    if(!userAssets[0]) throw new ErrorHandle(
        StatusCodes.BAD_REQUEST,
        "The User does not have any shares purchased"
      )

    const userAssetsSerialized = userAssets
      .map((userAsset) => SerializeForGetUserAssets(userAsset));
    return userAssetsSerialized;
  }

  async addWithdraw(clientLogged: any, informationWithdraw: any) {    
    const clientModelInstance = new ClientModel; 
    const user = await clientModelInstance.getOneUser(clientLogged.client_code);

    if((Number(user.balance) - Number(informationWithdraw.Valor)) < 0) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, "Insufficient funds")
    }

    user.balance = Number(user.balance) - Number(informationWithdraw.Valor);
    await clientModelInstance.updateInformations(user);
    return "Saque realizado com sucesso!"
  }

  async addDeposit(clientLogged: any, informationWithdraw: any) {
    const clientModelInstance = new ClientModel; 
    const user = await clientModelInstance.getOneUser(clientLogged.client_code);

    user.balance = Number(user.balance) + Number(informationWithdraw.Valor);
    await clientModelInstance.updateInformations(user);
    return "Depósito realizado com sucesso!"
  }
}
