import express from 'express';
import { featureFlagRoutes } from './featureFlagRoutes';

const routesV1 = express.Router();


routesV1.use('/feature_flags', featureFlagRoutes);

export {
  routesV1
}
