import { createClient } from '@supabase/supabase-js';
import { DatabaseSchema } from '~types';
import { ENV } from '~utils';

export const supabase = createClient<DatabaseSchema>(
  ENV.SUPABASE_PROJECT_URL,
  ENV.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
);
