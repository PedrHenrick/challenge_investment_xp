import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import joi from 'joi';
import ErrorHandle from '../Class/error';

const schemaInvestiment = joi.object({
  codCliente: joi.number().min(1).required(),
  codAtivo: joi.number().min(1).required(),
  qtdeAtivo: joi.number().min(1).required()
}).messages({
  "*": "Transaction denied",
});

const validateSchemaInvestiment = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaInvestiment.validate(req.body, { abortEarly: false });
  if (error) {
    const { message } = error.details[0];
    throw new ErrorHandle(StatusCodes.BAD_REQUEST, message);
  }
  next();
};

export default validateSchemaInvestiment;
