import { z } from 'zod';

export const EnvSchema = z.object({
  PORT: z.string().nonempty(),
  JWT_SECRET: z.string().nonempty(),

  SUPABASE_PROJECT_URL: z.string().nonempty(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().nonempty(),
});
