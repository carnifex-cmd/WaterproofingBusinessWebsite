import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Target, Users, Award, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Quality Excellence",
      description: "We never compromise on the quality of materials or workmanship. Every project receives our complete attention and expertise.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen to your concerns and provide tailored solutions that meet your specific needs.",
    },
    {
      icon: Award,
      title: "Professional Integrity",
      description: "Transparent pricing, honest assessments, and ethical business practices define how we work with every client.",
    },
    {
      icon: Heart,
      title: "Long-term Relationships",
      description: "We don't just fix problems; we build lasting relationships through reliable service and comprehensive warranty support.",
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us - Professional Waterproofing Experts"
        description="Learn about Shri Siddhivinayak Waterproofing, a trusted name in waterproofing and building repairs with 10+ years of experience serving housing societies across Mumbai, Thane, Navi Mumbai, and Pune."
        keywords="about waterproofing company, professional waterproofing Mumbai, experienced contractors, building repair experts, society maintenance services"
      />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-about-title">
                About Shri Siddhivinayak Waterproofing
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-about-subtitle">
                Your trusted partner in waterproofing and building maintenance solutions since over a decade
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6 text-center">
                Our Story
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Shri Siddhivinayak Waterproofing was founded with a simple mission: to provide reliable, high-quality waterproofing solutions to housing societies and homeowners across Maharashtra. What started as a small team of dedicated professionals has grown into a trusted name in the industry, serving hundreds of satisfied clients.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Over the years, we've specialized in addressing the unique challenges faced by buildings in our region—from monsoon-related water damage to structural wear and tear. Our team has worked extensively with housing societies, understanding the specific needs of multi-unit residential buildings and the importance of timely, effective maintenance.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We take pride in our reputation for reliability and quality. Every member of our team is trained in the latest waterproofing techniques and committed to delivering solutions that stand the test of time. We don't just fix leaks; we prevent them from happening again with comprehensive, long-lasting treatments.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Today, we serve clients across Mumbai, Navi Mumbai, Thane, and Pune, bringing professional expertise and a personal touch to every project, no matter the size. When you choose Shri Siddhivinayak Waterproofing, you're choosing a partner who cares about protecting your property as much as you do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-12 md:py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-muted-foreground">
                Guided by principles of quality, safety, and customer satisfaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6" data-testid={`card-value-${index}`}>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-center">
                What Makes Us Different
              </h2>
              
              <div className="grid gap-6">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Specialized in Housing Societies
                  </h3>
                  <p className="text-muted-foreground">
                    We understand the unique requirements of society buildings—from coordinating with multiple residents to working within society guidelines and budgets. Our experience with housing societies ensures smooth project execution.
                  </p>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Quality Materials Only
                  </h3>
                  <p className="text-muted-foreground">
                    We use only ISI-certified materials from trusted manufacturers. No shortcuts, no substitutions. This commitment to quality materials is what allows us to offer comprehensive warranties on our work.
                  </p>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Trained & Professional Team
                  </h3>
                  <p className="text-muted-foreground">
                    Our technicians receive ongoing training in the latest waterproofing techniques and safety protocols. They're not just skilled workers—they're professionals who respect your property and your time.
                  </p>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Transparent & Fair Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    No hidden costs or surprise charges. We provide detailed quotations upfront and stick to our commitments. You'll always know exactly what you're paying for and why.
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
