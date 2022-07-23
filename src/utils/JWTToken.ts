import { StatusCodes } from 'http-status-codes';
import jwt, { SignOptions } from 'jsonwebtoken'; 
import ErrorHandle from '../Class/error';
import { userType } from '../Types/User.type';

const SECRET = process.env.JWT_SECRET || '96e2c84bf0244e7f8e4075b11ec81929';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  noTimestamp: true,
};

export const generateJWTToken = (payload: userType) => 
  jwt.sign(payload, SECRET, jwtConfig);

export const authenticateToken = async (token: string) => {
  try {
    const hasValid = await jwt.verify(token, SECRET, jwtConfig);
    return hasValid;
  } catch (_err) {
    throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'Invalid token');
  }
};
