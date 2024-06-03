import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^[a-zA-Z0-9]+$/),
  username: z.string().regex(/^[a-zA-Z0-9]+$/),
});
