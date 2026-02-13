import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").min(2, "Name is too short"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),
  website: z.string().trim().url("Please enter a valid URL").or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
