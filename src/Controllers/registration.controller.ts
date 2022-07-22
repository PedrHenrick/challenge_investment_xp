import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RegistrationService } from '../Services/registration.service';

export class RegistrationController {
  async add(request: Request, response: Response): Promise<Response> {
    const registrationService = new RegistrationService().add;
    const token = await registrationService(request.body);
    return response.status(StatusCodes.CREATED).json({ token });
  }
};
