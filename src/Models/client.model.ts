import { UserRepository } from "../Database/Repositores/User.repository";
import { userType } from "../Types/User.type";

export class ClientModel {
  async getOneUser(codCliente: number) {
    const user = await UserRepository.findOneBy({ client_code: codCliente });
    return user as userType;
  };

  async updateInformations(updateObject: userType) {
    await UserRepository.save(updateObject);
    return "User updated"
  };
}
