import { Router } from 'express';
import { AccessController } from '../Controllers/access.controller';
import { loginSchema, registerSchema } from '../Middlewares/schemes';
import { validateMiddleware } from '../Middlewares/validate.middleware';

const accessRouter = Router();

accessRouter.post(
  '/login',
  validateMiddleware(loginSchema),
  new AccessController().verifyLogin
);

accessRouter.post(
  '/cadastro',
  validateMiddleware(registerSchema),
  new AccessController().addNewUser
);

export { accessRouter };
