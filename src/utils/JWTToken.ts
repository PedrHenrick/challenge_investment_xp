import jwt, { SignOptions } from 'jsonwebtoken'; 
import ErrorHandle from '../Class/error';
import { userType } from '../Types/User.type';

const SECRET = process.env.JWT_SECRET || 'bananinhaDePijaminha';

const jwtConfig: SignOptions = {
  expiresIn: '24H',
  algorithm: 'HS256',
};

export const generateJWTToken = (payload: userType) => 
  jwt.sign(payload, SECRET, jwtConfig);

export const authenticateToken = async (token: string) => {
  try {
    const hasValid = await jwt.verify(token, SECRET, jwtConfig);
    return hasValid;
  } catch (_err) {
    throw new ErrorHandle(401, 'Invalid token');
  }
};
