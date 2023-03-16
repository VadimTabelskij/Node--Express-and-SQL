import { Router } from 'express';
import { auth } from './methods/auth';
import { login } from './methods/login';
import { register } from './methods/register';

const authController = Router();

authController.post('/auth', auth);
authController.post('/login', login);
authController.post('/register', register);

export default authController;
