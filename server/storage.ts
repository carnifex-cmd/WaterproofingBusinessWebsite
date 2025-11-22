import { type ContactForm, type ContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  createContactSubmission(contact: ContactForm): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.contactSubmissions = new Map();
  }

  async createContactSubmission(contact: ContactForm): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...contact,
      id,
      submittedAt: new Date().toISOString(),
    };
    this.contactSubmissions.set(id, submission);
    console.log('Contact submission received:', {
      id: submission.id,
      name: submission.name,
      phone: submission.phone,
      serviceType: submission.serviceType,
      submittedAt: submission.submittedAt,
    });
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
