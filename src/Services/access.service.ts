import { StatusCodes } from 'http-status-codes';
import { ErrorHandle } from '../Class/error';
import { UserRepository } from '../Database/Repositores/User.repository';
import { AcessType } from '../Types/Acess.type';
import { generateJWTToken } from '../utils/JWTToken';
import  bcrypt from 'bcrypt-nodejs';
import { AccessModel } from '../Models/access.model';

export class AccessService {
  async authenticate ({ email, password }: AcessType) {
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
    });
    return token;
  }

  async addNewUser({ email, password }: AcessType) {
    const hasUser = await UserRepository.findOneBy({
      email,
    });

    if(hasUser) throw new ErrorHandle(StatusCodes.BAD_REQUEST, 'User already exists')

    const salt = bcrypt.genSaltSync(5);
    password = bcrypt.hashSync(password, salt);
    
    const userModel = new AccessModel().addNewUser;
    const userCreated = await userModel({ email, password });

    const token = generateJWTToken({
      client_code: userCreated.client_code,
      email: userCreated.email,
    });
    return token;
  }
}
