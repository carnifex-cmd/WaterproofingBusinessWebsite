import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us - Shri Siddhivinayak Waterproofing"
        description="Contact Shri Siddhivinayak Waterproofing for waterproofing solutions. Serving Mumbai, Navi Mumbai, Thane, and Pune. Call +91 98765 43210 for free inspection."
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
                Contact us for a free waterproofing inspection and expert solutions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <Card className="p-6 lg:p-8">
                  <h2 className="font-heading text-2xl font-bold mb-8">
                    Contact Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Phone */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phone</h3>
                        <p className="text-muted-foreground text-base" data-testid="text-contact-phone">
                          +91 98765 43210
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Mon - Sat, 9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground text-base" data-testid="text-contact-email">
                          info@siddhivinayak.com
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>

                    {/* Service Areas */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Service Areas</h3>
                        <p className="text-muted-foreground text-base">
                          Mumbai, Navi Mumbai, Thane, Pune
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                        <p className="text-muted-foreground text-base">
                          Monday - Saturday<br />
                          9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Response Guarantee */}
                <Card className="p-6 lg:p-8 bg-primary/5">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
