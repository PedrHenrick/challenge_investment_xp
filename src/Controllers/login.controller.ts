import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { LoginService } from '../Services/login.service';

export class LoginController {
  async verifyLogin(request: Request, response: Response): Promise<Response> {
    const loginService = new LoginService().authenticate;
    const token = await loginService(request.body);
    
    return response.status(StatusCodes.CONTINUE).json({ token });
  }
};
