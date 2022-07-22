import { UserRepository } from "../Database/Repositores/User.repository";
import { userType } from "../Types/User.type";

export class RegistrationModel {
  async add({ email, password }: userType) {
    const userCreated = UserRepository.create({ email, password });
    return UserRepository.save(userCreated);
  }
}
