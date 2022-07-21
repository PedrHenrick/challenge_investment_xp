import { Request, Response } from 'express';
import { DatabaseService } from "../Services/database.service";
import { StatusCodes } from 'http-status-codes';

export class DatabaseController {
  async all(_request: Request, response: Response) {
    try {
      const Database = new DatabaseService();
      const allAssets = await Database.all();
      return response.status(StatusCodes.OK).json(allAssets);
    } catch(err) {
      console.log(err);
      return response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err });
    }
  };
}
