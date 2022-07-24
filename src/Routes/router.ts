import express from 'express';
import { assertRouter } from './assertRouter';
import { userRouter } from './userRouter';
import { accessRouter } from './accessRouter';
import { investimentRouter } from './investmentRouter';
import { authenticateMiddleware } from '../Middlewares/auth.middleware';
import { validateMiddleware } from '../Middlewares/validate.middleware';
import { investimentSchema } from '../Middlewares/schemes';

const router = express.Router();

router.use('/acessar', accessRouter);
router.use('/ativos', assertRouter);
router.use('/cliente', authenticateMiddleware, userRouter);
router.use(
  '/investimentos',
  authenticateMiddleware,
  validateMiddleware(investimentSchema),
  investimentRouter
);

export { router };
