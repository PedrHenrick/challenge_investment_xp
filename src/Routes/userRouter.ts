import { Router } from 'express';
import { UserController } from '../Controllers/user.controller';
import validateSchemaTransation from '../Middlewares/transationValidate.middeware';

const userRouter = Router();

userRouter.get('/:codCliente/saldo', new UserController().getBalance);
userRouter.get('/:codCliente/ativos', new UserController().getAssets);
userRouter.post(
  '/saque',
  validateSchemaTransation,
  new UserController().addWithdraw
);
userRouter.post(
  '/deposito',
  validateSchemaTransation,
  new UserController().addDeposit
);

export { userRouter };
