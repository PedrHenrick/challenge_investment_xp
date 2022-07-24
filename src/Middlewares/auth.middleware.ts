import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorHandle } from '../Class/error';
import { authenticateToken } from '../utils/JWTToken';

export const authenticateMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const barentoken = req.headers.authorization;
  if (!barentoken) throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'Unauthorized');
  const [, token] = barentoken.split(' ');
  if (!token) throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'Unauthorized');
  await authenticateToken(token);
  next();
};
