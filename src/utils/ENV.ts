import { EnvSchema } from '~types';

export const ENV = EnvSchema.parse(process.env);
