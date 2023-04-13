import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '~utils';

export function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).send({ message: 'No token provided.' });
  }

  const tokenParts = authHeader.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).send({ message: 'Invalid token format.' });
  }

  const token = tokenParts[1];

  jwt.verify(token, ENV.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized.' });
    }
    next();
  });
}
