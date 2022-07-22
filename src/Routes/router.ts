import express from 'express';
import { routerAtivos } from './routerAtivos';

const router = express.Router();

router.use('/ativos', routerAtivos);

export { router };
