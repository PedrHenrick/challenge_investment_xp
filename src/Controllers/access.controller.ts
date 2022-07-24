import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AccessService } from '../Services/access.service';

export class AccessController {
  async verifyLogin(request: Request, response: Response): Promise<Response> {
    const accessService = new AccessService().authenticate;
    const token = await accessService(request.body);

    return response.status(StatusCodes.OK).json({ token });
  }

  async addNewUser(request: Request, response: Response): Promise<Response> {
    const accessService = new AccessService().addNewUser;
    const token = await accessService(request.body);
    return response.status(StatusCodes.CREATED).json({ token });
  }
};
