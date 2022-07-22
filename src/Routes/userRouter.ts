import { Router } from 'express';
import { UserController } from '../Controllers/user.controller';

const userRouter = Router();

userRouter.get('/:codCliente/saldo', new UserController().balance);
// clientRouter.post('/:codCliente/saque', new UserController().withdraw);
// clientRouter.post('/:codCliente/deposito', new UserController().deposit);

export { userRouter };
