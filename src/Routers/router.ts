import express from 'express';
import { DatabaseController } from '../Controllers/DatabaseController';

const router = express.Router();

router.get('/', new DatabaseController().all);

export { router };
