import { NextFunction, Request, Response } from 'express';
import ErrorHandle from '../Class/error';
import { StatusCodes } from 'http-status-codes';

const ErrorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { status, message } = err as ErrorHandle;
  res.status(status || StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message } || 'Erro interno');
};

export default ErrorMiddleware;
