import { Router } from 'express';
import { AssetsController } from '../Controllers/assets.controller';

const assertRouter = Router();

assertRouter.get('/', new AssetsController().all);
assertRouter.get('/update', new AssetsController().autoUpdate);
assertRouter.get('/:codAtivo', new AssetsController().one);

export { assertRouter };
