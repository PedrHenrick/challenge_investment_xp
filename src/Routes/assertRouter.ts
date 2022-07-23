import { Router } from 'express';
import { AssetsController } from '../Controllers/assets.controller';
import authenticate from '../Middlewares/auth.middleware';

const assertRouter = Router();

assertRouter.get('/', authenticate, new AssetsController().all);
assertRouter.get('/update',  new AssetsController().autoUpdate);
assertRouter.get('/:codAtivo', authenticate, new AssetsController().one);

export { assertRouter };
