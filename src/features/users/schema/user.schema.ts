import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid().optional(),
  firstname: z
    .string({ message: "Firstname is required" })
    .min(2, { message: "Firstname should be at least 2 characters" }),
  lastname: z.string({ message: "Firstname is required" })
    .min(2, { message: "Firstname should be at least 2 characters" }),
  email: z.string().email({message:"Only emails are accepted in this field"}),
  password: z.string().min(6,{message:"Password should contain at least 6 characters"}),
  role: z.enum(["candidate", "recruiter"]),
});

export type User = z.infer<typeof userSchema>;
