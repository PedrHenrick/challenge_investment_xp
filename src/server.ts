import express from 'express';
import 'express-async-errors';
import { AppDataSource } from './Database/data-source';
import cors from 'cors'
import startCron from './cron/start-cron';
import { DatabaseController } from './Controllers/database.controller';
import { autoUpdateDatabaseController } from './Controllers/autoUpdateDatabase.controller';

AppDataSource.initialize().then(() => {
  const PORT = process.env.PORT || 3000;
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.get('/', new DatabaseController().all);
  app.get('/update', new autoUpdateDatabaseController().autoUpdate);

  return app.listen(PORT, () => {
    console.log(`Server is running in ${ PORT }`);
    startCron.run();
  });
});
