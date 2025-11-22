import { Service } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Home, Droplet, Shield, Wrench, Building2, Hammer, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  droplet: Droplet,
  shield: Shield,
  wrench: Wrench,
  building2: Building2,
  hammer: Hammer,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Home;

  return (
    <Card className="p-6 hover-elevate transition-all duration-300 h-full flex flex-col" data-testid={`card-service-${service.id}`}>
      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4" data-testid={`icon-service-${service.id}`}>
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-3" data-testid={`text-service-title-${service.id}`}>
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed flex-1" data-testid={`text-service-desc-${service.id}`}>
        {service.description}
      </p>
    </Card>
  );
}
