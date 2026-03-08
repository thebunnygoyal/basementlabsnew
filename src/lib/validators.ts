import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  type: z.enum(["builder", "ecosystem", "other"], { required_error: "Please select an inquiry type" }),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message must be under 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const applicationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectName: z.string().min(2, "Project name is required"),
  description: z.string().min(20, "Please provide a more detailed description").max(3000, "Description must be under 3000 characters"),
  chain: z.string().optional(),
  demoLink: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
