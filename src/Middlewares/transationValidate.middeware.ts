import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import joi from 'joi';
import ErrorHandle from '../Class/error';

const schemaTransation = joi.object({
  CodCliente: joi.number().min(1).required(),
  Valor: joi.number().min(1).required(),
});

const validateSchemaTransation = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaTransation.validate(req.body, { abortEarly: false });
  if (error) {
    const { message } = error.details[0];
    throw new ErrorHandle(StatusCodes.BAD_REQUEST, message);
  }
  next();
};

export default validateSchemaTransation;
