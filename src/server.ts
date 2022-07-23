import { AppDataSource } from './Database/data-source';
import express from 'express';
import 'express-async-errors';
import cors from 'cors'
import { router } from './Routes/router';
import ErrorMiddleware from './Middlewares/error.middleware';
import startCron from './cron/start-cron';

AppDataSource.initialize().then(() => {
  const PORT = process.env.PORT || 3000;
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.use(ErrorMiddleware);

  return app.listen(PORT, () => {
    console.log(`Server is running in ${ PORT }`);
    startCron.run();
  });
});
