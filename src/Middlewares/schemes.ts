import joi from "joi";

export const transationSchema = joi.object({
  valor: joi.number().min(1).required(),
}).messages({
  "*": "Transaction denied",
});

export const investimentSchema = joi.object({
  codAtivo: joi.number().min(1).required(),
  qtdeAtivo: joi.number().min(1).required()
}).messages({
  "*": "Transaction denied",
});

export const registerSchema = joi.object({
  fullName: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});
