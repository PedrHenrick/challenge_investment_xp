import { Router } from 'express';
import { AssetsController } from '../Controllers/assets.controller';

const routerAtivos = Router();

routerAtivos.get('/', new AssetsController().all);
routerAtivos.get('/update', new AssetsController().autoUpdate);

export { routerAtivos };
