import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    location: string;
    description: string;
    serviceType: string;
    beforeImage?: string;
    afterImage?: string;
    amount?: string;
  };
}

const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasValidImages = isValidUrl(project.beforeImage) && isValidUrl(project.afterImage);

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col" data-testid={`card-project-${project.id}`}>
      {/* Before/After Images - Only show if both are valid URLs */}
      {hasValidImages && (
        <div className="grid grid-cols-2 gap-1">
          <div className="aspect-[4/3] bg-muted flex items-center justify-center relative overflow-hidden">
            <img
              src={project.beforeImage}
              alt="Before"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={400}
              height={300}
            />
            <span className="absolute bottom-2 left-2 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded">Before</span>
          </div>
          <div className="aspect-[4/3] bg-primary/5 flex items-center justify-center relative overflow-hidden">
            <img
              src={project.afterImage}
              alt="After"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={400}
              height={300}
            />
            <span className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">After</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <Badge variant="secondary" className="mb-2" data-testid={`badge-service-type-${project.id}`}>
            {project.serviceType}
          </Badge>
        </div>

        <h3 className="font-heading text-xl font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
          {project.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span data-testid={`text-project-location-${project.id}`}>{project.location}</span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {project.amount && (
          <div className="mt-auto pt-4 border-t">
            <p className="text-primary font-semibold text-sm">
              Project Value: {project.amount}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
