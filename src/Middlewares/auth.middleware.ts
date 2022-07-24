import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorHandle } from '../Class/error';
import { authenticateToken } from '../utils/JWTToken';

export const authenticateMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw new ErrorHandle(StatusCodes.UNAUTHORIZED, 'Token not found');
  await authenticateToken(token);
  next();
};
