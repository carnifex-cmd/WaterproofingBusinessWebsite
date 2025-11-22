import { z } from "zod";

// Service type
export const serviceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export type Service = z.infer<typeof serviceSchema>;

// Testimonial type
export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  society: z.string(),
  quote: z.string(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;

// Project type
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  location: z.string(),
  description: z.string(),
  serviceType: z.string(),
  beforeImage: z.string(),
  afterImage: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  societyName: z.string().min(2, "Society/Building name is required"),
  location: z.string().min(2, "Location is required"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Contact submission type (stored in backend)
export const contactSubmissionSchema = contactFormSchema.extend({
  id: z.string(),
  submittedAt: z.string(),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
