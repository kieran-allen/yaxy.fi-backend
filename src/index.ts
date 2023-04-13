import app from '~app';
import { ENV, jwtCreate, logger } from '~utils';

app.listen(ENV.PORT, () => {
  jwtCreate();
  logger.info(`yaxy.fi server starting on port:${ENV.PORT}`);
});
