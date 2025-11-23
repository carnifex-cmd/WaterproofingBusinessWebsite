import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import { projects2 } from "@/lib/data";

export default function Projects() {
  return (
    <>
      <SEOHead
        title="Our Projects - Waterproofing Work Gallery"
        description="View our completed waterproofing projects across Mumbai, Navi Mumbai, and Thane. Real projects completed by Shri Siddhivinayak Waterproofing for residential buildings, societies, and commercial establishments."
        keywords="waterproofing projects Mumbai, completed projects, terrace repair, building waterproofing, society maintenance, waterproofing portfolio"
      />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-projects-title">
                Our Projects Gallery
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-projects-subtitle">
                Completed projects showcasing our expertise in waterproofing and building repairs across Maharashtra
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects2.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every project starts with a free inspection. Let us assess your waterproofing needs and provide a detailed quotation.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover-elevate active-elevate-2 h-10 px-6 py-2"
              data-testid="button-projects-cta"
            >
              Schedule Free Inspection
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
