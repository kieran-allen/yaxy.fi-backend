import { z } from 'zod';

export const FlagSchema = z.object({
  name: z.string(),
  projectID: z.string(),
  description: z.string().optional(),
  status: z.boolean(),
  rolloutPercentage: z.number().int().min(0).max(100),
});

export type FlagSchema = z.infer<typeof FlagSchema>;
