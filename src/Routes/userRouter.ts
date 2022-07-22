import { Router } from 'express';
import { UserController } from '../Controllers/user.controller';

const userRouter = Router();

userRouter.get('/:codCliente/saldo', new UserController().getBalance);
// userRouter.post('/:codCliente/saque', new UserController().addWithdraw);
// userRouter.post('/:codCliente/deposito', new UserController().deposit);

export { userRouter };
