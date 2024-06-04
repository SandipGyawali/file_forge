import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^[a-zA-Z0-9]+$/),
  username: z.string().regex(/^[a-zA-Z0-9]+$/),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^[a-zA-Z0-9]+$/),
});
