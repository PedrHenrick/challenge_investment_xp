import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ErrorHandle } from "../Class/error";

export const validateMiddleware = (schema: any) => (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const { message } = error.details[0];
    throw new ErrorHandle(StatusCodes.BAD_REQUEST, message);
  }
  next();
};