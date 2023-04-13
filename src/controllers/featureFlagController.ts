import { Request, Response } from 'express';
import { PostgrestError, supabase } from '~models';
import { logger } from '~utils';

export async function createFeatureFlag(req: Request, res: Response) {
  try {
    const { error, data } = await supabase
      .from('flags')
      .insert(req.body)
      .select();

    if (error) throw new PostgrestError(error);

    logger.info('feature flag created');
    logger.info(JSON.stringify(data));

    res.status(201).json(data);
  } catch (e) {
    logger.error(JSON.stringify(e));

    if (e instanceof PostgrestError) {
      switch (e.code) {
        case '23505':
          return res.status(409).json({
            message: `flag of name \u201D${req.body.name}\u201D already exists in project \u201D${req.body.projectID}\u201D`,
          });
      }
    } else {
      return res
        .status(500)
        .json({ message: 'An error occurred while creating the feature flag' });
    }
  }
}

export async function getAllFeatureFlagsForProject(
  _: Request,
  res: Response,
) {
  try {
    const { error, data } = await supabase.from('flags').select();

    if (error) throw new PostgrestError(error);

    logger.info('feature flags fetched');
    logger.info(JSON.stringify(data));

    res.status(200).json(data);
  } catch (e) {
    logger.error(JSON.stringify(e));
    return res
      .status(500)
      .json({ message: 'An error occurred while fetching the feature flags' });
  }
}
