// src/routes/featureFlagRoutes.ts

import { Router } from 'express';
import { featureFlagController } from '~controllers';
import { isValidCreateFeatureFlagMiddleware } from '~middlewares';

const featureFlagRoutes = Router();

featureFlagRoutes.get('/', featureFlagController.getAllFeatureFlagsForProject);

featureFlagRoutes.post(
  '/',
  isValidCreateFeatureFlagMiddleware,
  featureFlagController.createFeatureFlag,
);

export { featureFlagRoutes };
