import { NextFunction, Request, Response } from 'express';
import { FlagSchema } from '~types';
import { logger } from '~utils';

export async function isValidCreateFeatureFlagMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await FlagSchema.parseAsync(req.body);
    next();
  } catch (e) {
    logger.error(JSON.stringify(e));
    res.status(422).json({ error: e });
  }
}
