import express from 'express';
import { assertRouter } from './assertRouter';
import { userRouter } from './userRouter';
import { accessRouter } from './accessRouter';
import { investimentRouter } from './investmentRouter';
import authenticate from '../Middlewares/auth.middleware';
import validateSchemaInvestiment from '../Middlewares/investimentValidate.middeware';

const router = express.Router();

router.use('/ativos', assertRouter);
router.use('/cliente', authenticate, userRouter);
router.use('/investimentos', authenticate, validateSchemaInvestiment, investimentRouter);
router.use('/acessar', accessRouter);



export { router };
