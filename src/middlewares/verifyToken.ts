import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function verifyToken(
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers['x-access-token'];
  if (!JWT_SECRET) {
    return res.status(500);
  }

  if (!token) {
    return res.status(403).send({ message: 'No "x-access-token" token provided.' });
  }

  const _token = Array.isArray(token) ? token[0] : token;

  jwt.verify(_token, JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized.' });
    }
    next();
  });
}
