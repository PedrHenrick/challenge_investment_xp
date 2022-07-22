import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import ErrorHandle from '../Class/error';

const schemaLogin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const validateSchemaLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaLogin.validate(req.body, { abortEarly: false });
  if (error) {
    const { message } = error.details[0];
    throw new ErrorHandle(400, message);
  }
  next();
};

export default validateSchemaLogin;
