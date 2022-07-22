import { Router } from 'express';
import { LoginController } from '../Controllers/login.controller';

const loginRouter = Router();

loginRouter.post('/', new LoginController().verifyLogin);

export { loginRouter };
