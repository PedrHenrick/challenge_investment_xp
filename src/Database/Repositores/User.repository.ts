import { AppDataSource } from "../data-source"
import { User } from "../Entities/User"

export const UserRepository = AppDataSource.getRepository(User);
