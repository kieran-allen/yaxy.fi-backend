import { FlagSchema } from './FlagSchema';

export type DatabaseSchema = {
  public: {
    Tables: {
      flags: {
        Row: FlagSchema;
        Insert: FlagSchema;
        Update: Partial<FlagSchema>;
      };
    };
  };
};
