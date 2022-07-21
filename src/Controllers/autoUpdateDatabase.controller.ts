import { Request, Response } from 'express';

export class autoUpdateDatabaseController {
  async autoUpdate(_request: Request, response: Response) {
    response.json("Lalalaland");
  };
}
