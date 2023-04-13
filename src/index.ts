import app from '~app';
import { jwtCreate } from '~services';
import { ENV, logger } from '~utils';

app.listen(ENV.PORT, () => {
  jwtCreate();
  logger.info(`yaxy.fi server starting on port:${ENV.PORT}`);
});
