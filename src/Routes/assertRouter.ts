import { Router } from 'express';
import { AssetsController } from '../Controllers/assets.controller';
import { authenticateMiddleware } from '../Middlewares/auth.middleware';

const assertRouter = Router();

assertRouter.get('/', authenticateMiddleware, new AssetsController().getAllAssets);
assertRouter.get('/update',  new AssetsController().autoUpdateValues);
assertRouter.get('/:codAtivo', authenticateMiddleware, new AssetsController().getOneAsset);

export { assertRouter };
