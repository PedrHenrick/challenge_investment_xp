import express from 'express';
import 'express-async-errors';
import { AppDataSource } from './Database/data-source';
import cors from 'cors'
import { router } from './Routers/router';

AppDataSource.initialize().then(() => {
  const PORT = process.env.PORT || 3000;
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);

  return app.listen(PORT, () => console.log(`Server is running in ${ PORT }`));
});
