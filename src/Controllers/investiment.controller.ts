import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { InvestimentService } from '../Services/investiment.service';
import { authenticateToken } from '../utils/JWTToken';

export class InvestimentController {
  async buy(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization || '';
    const userLogged = await authenticateToken(token);

    const investimentService = new InvestimentService().buy;
    const buyMade = await investimentService(userLogged, request.body);
    return response.status(StatusCodes.CREATED).json({ message: buyMade });
  }

  async sale(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization || '';
    const userLogged = await authenticateToken(token);

    const investimentService = new InvestimentService().sale;
    const saleMade = await investimentService(userLogged, request.body);
    return response.status(StatusCodes.CREATED).json({ message: saleMade });
  }
};
