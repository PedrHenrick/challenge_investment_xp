import { Router } from 'express';
import { RegistrationController } from '../Controllers/registration.controller';

const registrationRouter = Router();

registrationRouter.post('/', new RegistrationController().add);

export { registrationRouter };
