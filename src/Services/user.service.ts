import { StatusCodes } from 'http-status-codes';
import ErrorHandle from '../Class/error';
import { UserModel } from '../Models/user.model';

export class UserService {
  async balance(userLogged: any, codCliente: number) {

    if (userLogged.client_code !== codCliente) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'User is not permission')
    }

    const userModel = new UserModel().one; 
    const user = await userModel(codCliente);
    return {
      CodCliente: codCliente,
      Saldo: user.balance,
    };
  }
}