import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.post('/data', (req, res) => {
  const data = req.body;

  res.status(StatusCodes.UNAUTHORIZED).json({ data });
});

export { router };