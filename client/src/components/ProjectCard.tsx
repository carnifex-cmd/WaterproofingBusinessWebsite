import { Project } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col" data-testid={`card-project-${project.id}`}>
      {/* Before/After Images */}
      <div className="grid grid-cols-2 gap-1">
        <div className="aspect-[4/3] bg-muted flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
          <span className="text-muted-foreground font-medium relative z-10">Before</span>
        </div>
        <div className="aspect-[4/3] bg-primary/5 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
          <span className="text-primary font-medium relative z-10">After</span>
        </div>
      </div>
      
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
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </Card>
  );
}
