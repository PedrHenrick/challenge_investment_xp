import express from 'express';
import { assertRouter } from './assertRouter';
import { clientRouter } from './clientRouter';
import { accessRouter } from './accessRouter';
import { investimentRouter } from './investmentRouter';
import { authenticateMiddleware } from '../Middlewares/auth.middleware';
import { validateMiddleware } from '../Middlewares/validate.middleware';
import { investimentSchema } from '../Middlewares/schemes';

const router = express.Router();

router.use('/acessar', accessRouter); // Ok
router.use('/ativos', assertRouter); // OK
router.use('/cliente', authenticateMiddleware, clientRouter); // OK
router.use(
  '/investimentos',
  authenticateMiddleware,
  validateMiddleware(investimentSchema),
  investimentRouter
);

export { router };
