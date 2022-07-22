import { Router } from 'express';
import { AssetsController } from '../Controllers/assets.controller';

const assertRouter = Router();

assertRouter.get('/', new AssetsController().all);
assertRouter.get('/:codAtivo', new AssetsController().one);
assertRouter.get('/update', new AssetsController().autoUpdate);

export { assertRouter };
