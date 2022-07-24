import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { InvestimentService } from '../Services/investiment.service';
import { authenticateToken } from '../utils/JWTToken';

export class InvestimentController {
  async buy(request: Request, response: Response): Promise<Response> {
    const bearertoken = request.headers.authorization || '';
    const [bearer, token] = bearertoken.split(' ');

    let clientLogged;
    if(bearertoken.includes('Bearer')) clientLogged = await authenticateToken(token);
    else clientLogged = await authenticateToken(bearer);

    const investimentService = new InvestimentService().buy;
    const buyMade = await investimentService(clientLogged, request.body);
    return response.status(StatusCodes.CREATED).json({ message: buyMade });
  }

  async sale(request: Request, response: Response): Promise<Response> {
    const bearertoken = request.headers.authorization || '';
    const [bearer, token] = bearertoken.split(' ');

    let clientLogged;
    if(bearertoken.includes('Bearer')) clientLogged = await authenticateToken(token);
    else clientLogged = await authenticateToken(bearer);

    const investimentService = new InvestimentService().sale;
    const saleMade = await investimentService(clientLogged, request.body);
    return response.status(StatusCodes.CREATED).json({ message: saleMade });
  }
};
