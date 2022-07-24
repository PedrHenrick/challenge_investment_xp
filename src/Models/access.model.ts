import { UserRepository } from "../Database/Repositores/User.repository";
import { AcessType } from "../Types/Acess.type";

export class AccessModel {
  async addNewUser({ email, password, fullName }: AcessType) {
    const userCreated = UserRepository.create({ email, password, fullName });
    return UserRepository.save(userCreated);
  }
}
