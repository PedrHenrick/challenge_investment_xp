import { StatusCodes } from 'http-status-codes';
import ErrorHandle from '../Class/error';
import { UserRepository } from '../Database/Repositores/User.repository';
import { logintype } from '../Types/Login.type';
import { generateJWTToken } from '../utils/JWTToken';

export class LoginService {
  async authenticate ({ email, password }: logintype) {
    const user = await UserRepository.findOneBy({ email, password });

    if (!user) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'Username or password invalid');
    }

    const userToken = {
      email: user.email,
      password: user.password,
    }
    return generateJWTToken(userToken);
  }
}
