import express from 'express';
import { DatabaseController } from '../Controllers/database.controller';

const router = express.Router();

router.get('/', new DatabaseController().all);

export { router };
