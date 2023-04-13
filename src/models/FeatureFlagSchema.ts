import { z } from "zod";

export const FeatureFlagCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  status: z.boolean().optional(),
  rolloutPercentage: z.number().int().min(0).max(100).optional(),
});
