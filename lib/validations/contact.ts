import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(120, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(254, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
  /** Honeypot — must be empty for legitimate submissions. */
  companyWebsite: z.string().max(0).optional().default(""),
  /** Client timestamp (ms) when the form was shown. */
  formStartedAt: z.number().int().positive(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
