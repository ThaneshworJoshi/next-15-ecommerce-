import * as z from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// TypeScript type inferred from schema
export type ContactFormData = z.infer<typeof contactFormSchema>; 