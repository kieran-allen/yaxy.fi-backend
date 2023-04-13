import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { logger } from '~utils';

export const loggerErrorMiddleware = (
  error: ErrorRequestHandler,
  _1: Request,
  res: Response,
  _2: NextFunction,
) => {
  const errorToString = error.toString();
  logger.error(errorToString, 'error');
  res.status(500).json({ error: errorToString });
};
