import { Router } from 'express';
import { AssetsController } from '../Controllers/assets.controller';
import { authenticateMiddleware } from '../Middlewares/auth.middleware';

const assertRouter = Router();

assertRouter.get('/', authenticateMiddleware, new AssetsController().all);
assertRouter.get('/update',  new AssetsController().autoUpdate);
assertRouter.get('/:codAtivo', authenticateMiddleware, new AssetsController().one);

export { assertRouter };
