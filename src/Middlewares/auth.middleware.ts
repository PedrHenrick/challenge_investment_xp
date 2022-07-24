import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorHandle } from '../Class/error';
import { authenticateToken } from '../utils/JWTToken';

export const authenticateMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const bearertoken = req.headers.authorization;
  
  if (!bearertoken) throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'Unauthorized');
  const [bearer, token] = bearertoken.split(' ');
  
  if(bearertoken.includes('Bearer')) await authenticateToken(token);
  else await authenticateToken(bearer);
  next();
};
