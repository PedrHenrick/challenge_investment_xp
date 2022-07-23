import express from 'express';
import { assertRouter } from './assertRouter';
import { userRouter } from './userRouter';
import { loginRouter } from './loginRouter';
import { registrationRouter } from './registrationRouter';
import { investimentRouter } from './investmentRouter';
import authenticate from '../Middlewares/auth.middleware';
import validateSchemaLogin from '../Middlewares/loginValidate.middeware';
import validateSchemaInvestiment from '../Middlewares/investimentValidate.middeware';

const router = express.Router();

router.use('/ativos', authenticate, assertRouter);
router.use('/cliente', authenticate, userRouter);
router.use('/login', validateSchemaLogin, loginRouter)
router.use('/cadastro', validateSchemaLogin, registrationRouter);
router.use('/investimentos', authenticate, validateSchemaInvestiment, investimentRouter);

export { router };
