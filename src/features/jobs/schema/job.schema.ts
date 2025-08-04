import { z } from "zod";

export const JobSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string({ message: "Title is required" }),
  description: z.string({ message: "Description is required" }),
  company: z.string({ message: "Company is required" }),
  location: z.string({ message: "Location is required" }),
  jobType: z.string({ message: "Job type is required" }),
  salary: z.string().optional(),
  createdAt: z.date()
});

// TypeScript type from schema
export type Job = z.infer<typeof JobSchema>;
