import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.json({
        success: true,
        message: "Thank you for contacting us! We'll respond within 24 hours.",
        submissionId: submission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while submitting your message. Please try again.",
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact/submissions", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, submissions });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching submissions.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
