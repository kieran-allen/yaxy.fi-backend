import express from 'express';
import {
  loggerErrorMiddleware,
  loggerMiddleware,
  verifyToken,
} from './middlewares';
import { routesV1 } from '~routes';

const app = express();

app.use(verifyToken)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);
app.use('/v1', routesV1);

app.use(loggerErrorMiddleware);

export default app;
