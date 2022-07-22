import { StatusCodes } from 'http-status-codes';
import ErrorHandle from '../Class/error';
import { UserRepository } from '../Database/Repositores/User.repository';
import { logintype } from '../Types/Login.type';
import { generateJWTToken } from '../utils/JWTToken';
import  bcrypt from 'bcrypt-nodejs';

export class LoginService {
  async authenticate ({ email, password }: logintype) {
    const user = await UserRepository.findOneBy({ email });

    if (!user) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'User does not exist');
    }

    const isMatch = await bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'Username or password invalid');
    }

    const token = generateJWTToken({
      client_code: user.client_code,
      email: user.email,
      password: user.password,
    });
    return token;
  }
}
