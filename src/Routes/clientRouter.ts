import { Router } from 'express';
import { ClientController } from '../Controllers/client.controller';
import { transationSchema } from '../Middlewares/schemes';
import { validateMiddleware } from '../Middlewares/validate.middleware';

const clientRouter = Router();

clientRouter.get('/saldo', new ClientController().getBalance);
clientRouter.get('/ativos', new ClientController().getAssets);
clientRouter.post(
  '/saque',
  validateMiddleware(transationSchema),
  new ClientController().addWithdraw
);
clientRouter.post(
  '/deposito',
  validateMiddleware(transationSchema),
  new ClientController().addDeposit
);

export { clientRouter };
