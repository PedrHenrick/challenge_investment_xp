import express from 'express';
import authenticate from '../Middlewares/auth.middleware';
import validateSchemaLogin from '../Middlewares/loginValidate.middeware';
import { assertRouter } from './assertRouter';
import { clientRouter } from './clientRouter';
import { loginRouter } from './loginRouter';

const router = express.Router();

router.use('/ativos', authenticate, assertRouter);
// router.use('/cliente/:codCliente', authenticate, clientRouter);
router.use('/login', validateSchemaLogin, loginRouter)

export { router };
