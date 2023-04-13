import express from 'express';
import {
  loggerErrorMiddleware,
  loggerMiddleware,
  verifyTokenMiddleware,
} from './middlewares';
import { routesV1 } from '~routes';

const app = express();

app.use(verifyTokenMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);


// setup routes
app.use('/v1', routesV1);

app.use(loggerErrorMiddleware);

export default app;
