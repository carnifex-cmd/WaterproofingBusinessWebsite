import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const servicesDetailed = [
    {
      title: "Terrace Waterproofing",
      problem: "Terrace leakage is one of the most common problems in Indian buildings, especially during monsoon. Water seepage from the terrace damages ceilings, walls, and can even compromise structural integrity over time.",
      solution: "Our comprehensive terrace waterproofing solution includes thorough surface preparation, crack filling, application of chemical-based waterproof coatings, and protective membrane systems. We ensure proper slope and drainage to prevent water accumulation.",
      process: [
        "Thorough cleaning and surface preparation",
        "Crack filling and surface repair",
        "Application of primer coat",
        "Multiple layers of waterproof membrane/coating",
        "Protective brick bat coba or tile finishing",
        "Quality testing and inspection",
      ],
      benefits: [
        "Complete protection from monsoon leakage",
        "Extended building life and reduced maintenance",
        "Prevents ceiling and wall damage",
        "Energy-efficient roof insulation",
        "Long-term warranty coverage",
      ],
    },
    {
      title: "Bathroom & Toilet Leakage Repair",
      problem: "Bathroom leakage affects not just your space but can damage neighboring flats below. Common issues include cracked tiles, poor waterproofing behind tiles, damaged plumbing, and grout failures that allow water seepage.",
      solution: "We provide complete bathroom waterproofing services including tile removal (when necessary), plumbing repairs, specialized waterproof membrane application, anti-fungal treatment, and expert tile reinstallation with proper grouting and finishing.",
      process: [
        "Detailed leak detection and assessment",
        "Removal of damaged tiles and fixtures (if required)",
        "Plumbing repairs and testing",
        "Application of waterproof membrane on walls and floor",
        "Anti-fungal and anti-bacterial treatment",
        "Professional tile installation and grouting",
      ],
      benefits: [
        "Eliminates seepage to lower floors",
        "Prevents mold and fungal growth",
        "Protects walls and flooring",
        "Improves bathroom hygiene",
        "Adds value to your property",
      ],
    },
    {
      title: "Balcony and Wall Seepage Solutions",
      problem: "External walls and balconies face constant exposure to rain and moisture, leading to seepage, dampness, paint peeling, and structural damage. This is particularly severe in coastal areas like Mumbai.",
      solution: "Our wall and balcony waterproofing includes external coating applications, crack injection treatments, drainage improvement, and specialized weather-resistant coatings that protect against rain, humidity, and salt damage.",
      process: [
        "Identification of seepage points and cracks",
        "Deep cleaning and surface preparation",
        "Crack filling with epoxy injection",
        "Application of weather-resistant waterproof coating",
        "Balcony floor and parapet treatment",
        "Final protective coating and finishing",
      ],
      benefits: [
        "Stops water infiltration and dampness",
        "Prevents paint peeling and plaster damage",
        "Protects against salt and pollution damage",
        "Maintains aesthetic appearance",
        "Reduces electricity costs (dry walls)",
      ],
    },
    {
      title: "Roof and Overhead Tank Waterproofing",
      problem: "Overhead tanks and roofs are critical areas that require specialized waterproofing. Leaking tanks contaminate water supply, while roof leakage can damage the entire building structure.",
      solution: "We provide comprehensive tank and roof waterproofing using food-grade, non-toxic coatings for water tanks and durable membrane systems for roofs. Our solutions ensure clean water storage and complete leak protection.",
      process: [
        "Tank/roof cleaning and preparation",
        "Structural crack repair",
        "Application of primer coat",
        "Food-grade waterproof coating for tanks",
        "Multiple protective layers",
        "Water testing and quality certification",
      ],
      benefits: [
        "Safe, clean water storage",
        "Prevents water wastage from leaks",
        "Extends tank and roof lifespan",
        "Reduces maintenance costs",
        "Complies with health and safety standards",
      ],
    },
    {
      title: "Crack Filling and External Wall Treatment",
      problem: "Structural cracks in external walls allow water infiltration, leading to weakened foundations, internal dampness, and progressive building damage. These cracks widen over time if not addressed properly.",
      solution: "Our crack filling service uses advanced epoxy injection technology and specialized sealants to fill and seal cracks permanently. We combine this with external wall waterproofing for comprehensive protection.",
      process: [
        "Detailed crack assessment and mapping",
        "Surface preparation and cleaning",
        "Epoxy resin injection for deep cracks",
        "Flexible sealant application for surface cracks",
        "External waterproof coating application",
        "Monitoring and quality assurance",
      ],
      benefits: [
        "Prevents further structural damage",
        "Stops water infiltration at source",
        "Strengthens wall integrity",
        "Prevents internal dampness",
        "Cost-effective prevention measure",
      ],
    },
    {
      title: "Structural Repair & Society Building Maintenance",
      problem: "Aging buildings and housing societies require regular maintenance to address multiple issues—from structural repairs to painting, plumbing, and electrical work. Coordinating these repairs can be challenging for society committees.",
      solution: "We offer comprehensive society building maintenance services including structural assessments, concrete repairs, painting, plumbing fixes, electrical upgrades, and preventive maintenance programs tailored for housing societies.",
      process: [
        "Complete building inspection and assessment",
        "Detailed scope of work and quotation",
        "Phased execution plan (minimal resident disruption)",
        "Structural repairs and reinforcement",
        "Plumbing, electrical, and painting work",
        "Regular maintenance schedule setup",
      ],
      benefits: [
        "One-stop solution for all building needs",
        "Experienced in society management coordination",
        "Extends building lifespan significantly",
        "Maintains property value",
        "Reduces long-term maintenance costs",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Waterproofing Services - Terrace, Bathroom, Wall & Building Repairs"
        description="Comprehensive waterproofing services including terrace waterproofing, bathroom leakage repair, wall seepage treatment, water tank waterproofing, and complete building maintenance for housing societies in Mumbai, Thane, Navi Mumbai, and Pune."
        keywords="terrace waterproofing Mumbai, bathroom leakage repair, wall seepage treatment, water tank waterproofing, building maintenance services, society repairs, structural waterproofing"
      />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-services-title">
                Our Waterproofing Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-services-subtitle">
                Professional solutions for every waterproofing challenge—from terraces to bathrooms, walls to complete building maintenance
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-16">
              {servicesDetailed.map((service, index) => (
                <div key={index} data-testid={`section-service-${index}`}>
                  <Card className="p-8 lg:p-12">
                    <div className="mb-6">
                      <Badge variant="secondary" className="mb-4">
                        Service {index + 1}
                      </Badge>
                      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary" data-testid={`text-service-title-${index}`}>
                        {service.title}
                      </h2>
                    </div>

                    {/* The Problem */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        The Problem
                      </h3>
                      <p className="text-muted-foreground leading-relaxed pl-4">
                        {service.problem}
                      </p>
                    </div>

                    {/* Our Solution */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed pl-4">
                        {service.solution}
                      </p>
                    </div>

                    {/* Process */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Our Process
                      </h3>
                      <div className="grid gap-3 pl-4">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <p className="text-muted-foreground flex-1">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Benefits
                      </h3>
                      <div className="grid gap-3 pl-4">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-muted-foreground flex-1">
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
