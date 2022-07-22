import { StatusCodes } from 'http-status-codes';
import ErrorHandle from '../Class/error';
import { UserRepository } from '../Database/Repositores/User.repository';
import { RegistrationModel } from '../Models/registration.model';
import { userType } from '../Types/User.type';
import { generateJWTToken } from '../utils/JWTToken';
import bcrypt from 'bcrypt-nodejs';

export class RegistrationService {
  async add(user: userType) {
    const hasUser = await UserRepository.findOneBy({
      email: user.email,
    });

    if(hasUser) throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'User already exists')

    const salt = bcrypt.genSaltSync(5);
    user.password = bcrypt.hashSync(user.password, salt);
    
    const userModel = new RegistrationModel().add;
    const userCreated = await userModel({
      email: user.email,
      password: user.password,
    });

    const token = generateJWTToken({
      client_code: userCreated.client_code,
      email: userCreated.email,
      password: userCreated.password,
    });
    return token;
  }
};
