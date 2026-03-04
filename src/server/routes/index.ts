import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CitiesController } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.post('/cities', CitiesController.create);

export { router };