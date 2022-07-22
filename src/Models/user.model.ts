import { UserRepository } from "../Database/Repositores/User.repository";
import { userType } from "../Types/User.type";

export class UserModel {
  async one(codCliente: number) {
    const user = await UserRepository.findOneBy({ client_code: codCliente });
    return user as userType;
  }
}