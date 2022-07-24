import { Request, Response } from 'express';
import { AssetsService } from "../Services/assets.service";
import { StatusCodes } from 'http-status-codes';

export class AssetsController {
  async getAllAssets(_request: Request, response: Response): Promise<Response> {
    const assetsInstance = new AssetsService();
    const allAssets = await assetsInstance.getAllAssets();
    return response.status(StatusCodes.OK).json(allAssets);
  };
  
  async autoUpdateValues(_request: Request, response: Response): Promise<Response> {
    const assetsInstance = new AssetsService();
    const ActualizationMessage = await assetsInstance.autoUpdateValues();
    return response.status(StatusCodes.OK).json(ActualizationMessage);
  }

  async getOneAsset(request: Request, response: Response): Promise<Response> {
    const assetsInstance = new AssetsService();
    const { codAtivo } = request.params;
    const asset = await assetsInstance.getOneAsset(Number(codAtivo));
    return response.status(StatusCodes.OK).json(asset);
  }
}
