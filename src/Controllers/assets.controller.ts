import { Request, Response } from 'express';
import { AssetsService } from "../Services/assets.service";
import { StatusCodes } from 'http-status-codes';

export class AssetsController {
  async all(_request: Request, response: Response) {
    try {
      const assetsInstance = new AssetsService();
      const allAssets = await assetsInstance.all();
      return response.status(StatusCodes.OK).json(allAssets);
    } catch(err) {
      console.log(err);
      return response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err });
    }
  };

  async one(request: Request, response: Response) {
    try {
      const assetsInstance = new AssetsService();
      const { codAtivo } = request.params;
      const asset = await assetsInstance.one(Number(codAtivo));
      return response.status(StatusCodes.OK).json(asset);
    } catch(err) {
      console.log(err);
      return response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err });
    }
  }

  async autoUpdate(_request: Request, response: Response) {
    try {
      const assetsInstance = new AssetsService();
      const ActualizationMessage = await assetsInstance.autoUpdate();
      return response.status(StatusCodes.OK).json(ActualizationMessage);
    } catch(err) {
      console.log(err);
      return response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err });
    }
  }
}
