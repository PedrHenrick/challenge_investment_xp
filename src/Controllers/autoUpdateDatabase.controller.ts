import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AutoUpdateDatabaseService } from '../Services/autoUpdateDatabase.service';

export class autoUpdateDatabaseController {
  async autoUpdate(_request: Request, response: Response) {
    try {
      const Database = new AutoUpdateDatabaseService();
      const ActualizationMessage = await Database.autoUpdate();
      return response.status(StatusCodes.OK).json(ActualizationMessage);
    } catch(err) {
      console.log(err);
      return response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err });
    }
  }
}
