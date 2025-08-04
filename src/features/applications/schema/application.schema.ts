import { z } from "zod";

export const applicationSchema = z.object({
  id: z.string().uuid().optional(),
  appliedAt: z.date(),
});

export type Application = z.infer<typeof applicationSchema>;
