import express, { Request, Response } from 'express';

const routesV1 = express.Router();

routesV1.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    name: 'Foo',
    occupation: 'Bar Engineer',
  });
});

export { routesV1 };
