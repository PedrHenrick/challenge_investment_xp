import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ClientService } from '../Services/client.service';
import { authenticateToken } from '../utils/JWTToken';

export class ClientController {
  async getBalance(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization || '';
    const clientLogged = await authenticateToken(token);

    const clientService = new ClientService().getBalance;
    const userBalance = await clientService(clientLogged);
    return response.status(StatusCodes.OK).json(userBalance);
  }

  async getAssets(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization || '';
    const clientLogged = await authenticateToken(token);

    const clientService = new ClientService().getAssets;
    const userAssets = await clientService(clientLogged);
    return response.status(StatusCodes.OK).json(userAssets);
  }

  async addWithdraw(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization || '';
    const clientLogged = await authenticateToken(token);
    
    const clientService = new ClientService().addWithdraw;
    const transationResult = await clientService(clientLogged, request.body);
    return response.status(StatusCodes.CREATED).json({ message: transationResult });
  }

  async addDeposit(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization || '';
    const clientLogged = await authenticateToken(token);
    
    const clientService = new ClientService().addDeposit;
    const transationResult = await clientService(clientLogged, request.body);
    return response.status(StatusCodes.CREATED).json({ message: transationResult });
  }
};
