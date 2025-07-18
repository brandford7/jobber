// src/features/auth/schema/auth.schema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["candidate", "recruiter"]),
});

export type Login = z.infer<typeof loginSchema>;

export type Register = z.infer<typeof registerSchema>;
