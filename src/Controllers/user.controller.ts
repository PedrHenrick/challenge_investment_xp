import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../Services/user.service';
import { authenticateToken } from '../utils/JWTToken';

export class UserController {
  async getBalance(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization || '';
    const userLogged = await authenticateToken(token);
    
    const { codCliente } = request.params
    
    const userService = new UserService().getBalance;
    const userBalance = await userService(userLogged, Number(codCliente));

    return response.status(StatusCodes.CREATED).json(userBalance);
  }

  async addWithdraw(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization || '';
    const userLogged = await authenticateToken(token);
    
    const userService = new UserService().addWithdraw;
    const transationResult = await userService(userLogged, request.body);

    return response.status(StatusCodes.CREATED).json({ message: transationResult });
  }
};
