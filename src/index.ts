import app from '~app';
import { jwtCreate } from '~services';
import { logger } from '~utils';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  jwtCreate();
  logger.info(`yaxy.fi server starting on port:${PORT}`);
});
