import { NextFunction, Request, Response } from 'express';
import { logger } from '~utils';

export const loggerMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};
