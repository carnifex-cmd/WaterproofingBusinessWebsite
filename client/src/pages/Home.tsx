import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SEOHead from "@/components/SEOHead";
import { services, testimonials, serviceAreas, whyChooseUs } from "@/lib/data";
import { Phone, Eye, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Expert Waterproofing & Society Building Repair Services"
        description="Professional waterproofing services for terraces, bathrooms, and buildings in Mumbai, Navi Mumbai, Thane, and Pune. 10+ years experience with quality materials and long-term warranty. Get a free inspection today!"
        keywords="waterproofing Mumbai, terrace waterproofing, bathroom leakage repair, society building repairs, Mumbai waterproofing services, Thane waterproofing, Pune waterproofing, wall seepage treatment"
      />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
              Expert Waterproofing & Society Building Repair Services
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
              Leak-proof, long-lasting solutions for housing societies and homes across Maharashtra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 border-white" data-testid="button-hero-inspection">
                  <Phone className="w-5 h-5 mr-2" />
                  Book a Free Inspection
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 backdrop-blur-sm" data-testid="button-hero-services">
                  <Eye className="w-5 h-5 mr-2" />
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-services-heading">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive waterproofing and building repair solutions tailored to your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by hundreds of housing societies and homeowners across Maharashtra
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex gap-4" data-testid={`item-why-choose-${index}`}>
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Providing professional waterproofing services across major cities in Maharashtra
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceAreas.map((area) => (
                <Badge key={area} variant="secondary" className="text-base px-6 py-2" data-testid={`badge-area-${area.toLowerCase().replace(/\s+/g, '-')}`}>
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real feedback from satisfied customers across Maharashtra
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-20 lg:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-cta-heading">
              Ready to Fix Your Leakage Problems?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
              Get a free inspection and quote from our expert team. We usually respond within 24 hours.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" data-testid="button-cta-final">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
