import { Router } from 'express';
import { AccessController } from '../Controllers/access.controller';

const accessRouter = Router();

accessRouter.post('/login', new AccessController().verifyLogin)
accessRouter.post('/cadastro', new AccessController().addNewUser);

export { accessRouter };
