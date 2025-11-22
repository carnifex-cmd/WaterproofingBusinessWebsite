import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      societyName: "",
      location: "",
      serviceType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const result = await apiRequest("POST", "/api/contact", data);
      return result;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll contact you within 24 hours. Thank you for reaching out!",
      });
      form.reset();
      // Invalidate contact submissions cache
      queryClient.invalidateQueries({ queryKey: ['/api/contact/submissions'] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  const serviceTypes = [
    "Terrace Waterproofing",
    "Bathroom Leakage Repair",
    "Wall Crack Filling & Seepage Control",
    "Chemical Coating",
    "Water Tank Waterproofing",
    "Structural Repairs & Society Maintenance",
    "General Inquiry",
  ];

  return (
    <>
      <SEOHead
        title="Contact Us - Get Free Waterproofing Inspection"
        description="Contact Shri Siddhivinayak Waterproofing for a free inspection and quote. Serving Mumbai, Navi Mumbai, Thane, and Pune. Call us or fill out our contact form for expert waterproofing solutions."
        keywords="contact waterproofing Mumbai, free inspection, waterproofing quote, terrace repair contact, bathroom leakage consultation"
      />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-contact-title">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-contact-subtitle">
                Schedule a free inspection or get answers to your waterproofing questions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <Card className="p-6 lg:p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6">
                    Send Us a Message
                  </h2>

                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-md flex items-start gap-3" data-testid="alert-success">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-primary">Message Sent!</p>
                        <p className="text-sm text-muted-foreground">
                          Thank you for contacting us. We'll respond within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="10-digit mobile number" 
                                {...field} 
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email (Optional)</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your.email@example.com" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="societyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Society / Building Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your society or building name" 
                                {...field} 
                                data-testid="input-society"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="City / Area" 
                                {...field} 
                                data-testid="input-location"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Required *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceTypes.map((service) => (
                                  <SelectItem 
                                    key={service} 
                                    value={service}
                                    data-testid={`option-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message / Description *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your waterproofing issue or requirements..."
                                className="min-h-[120px] resize-none"
                                {...field} 
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={contactMutation.isPending}
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="font-heading text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-phone">
                          +91 98765 43210
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Mon - Sat, 9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground" data-testid="text-contact-email">
                          info@siddhivinayak.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Service Areas</h3>
                        <p className="text-muted-foreground">
                          Mumbai, Navi Mumbai, Thane, Pune
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Working Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Saturday<br />
                          9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary/5">
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-muted-foreground">
                    We understand that waterproofing issues need prompt attention. Our team typically responds to all inquiries within 24 hours and can schedule free inspections at your convenience.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
