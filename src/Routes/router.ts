import express from 'express';
import authenticate from '../Middlewares/auth.middleware';
import validateSchemaLogin from '../Middlewares/loginValidate.middeware';
import { assertRouter } from './assertRouter';
// import { userRouter } from './userRouter';
import { loginRouter } from './loginRouter';
import { registrationRouter } from './registrationRouter';

const router = express.Router();

router.use('/ativos', authenticate, assertRouter);
// router.use('/cliente', authenticate, userRouter);
router.use('/login', validateSchemaLogin, loginRouter)
router.use('/cadastro', validateSchemaLogin, registrationRouter);

export { router };
