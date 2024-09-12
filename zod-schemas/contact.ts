import { z } from "zod";

export const contactFormZodSchema = z.object({
  name: z
    .string({ required_error: "Name is required!" })
    .min(1, "Name should be at least 1 character!"),
  email: z.string({ required_error: "Email is required!" }).email(),
  message: z
    .string({ required_error: "Message is required!" })
    .min(1, "Message can't be empty"),
});
