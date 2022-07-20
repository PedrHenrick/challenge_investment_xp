import express from 'express';
import { investmentRoute} from './investmentRoute';

const router = express.Router();

router.use('/investimentos', investmentRoute);

export { router };
