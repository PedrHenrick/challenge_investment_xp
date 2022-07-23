import { Router } from 'express';
import { InvestimentController } from '../Controllers/investiment.controller';

const investimentRouter = Router();

investimentRouter.post('/comprar', new InvestimentController().buy);
investimentRouter.post('/vender', new InvestimentController().sale);

export { investimentRouter };
