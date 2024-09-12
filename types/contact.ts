import { z } from "zod";
import { contactFormZodSchema } from "@/zod-schemas/contact";

export type ContactFormData = z.infer<typeof contactFormZodSchema>;
