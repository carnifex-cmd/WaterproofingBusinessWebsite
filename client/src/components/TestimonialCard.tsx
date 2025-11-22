import { Testimonial } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6 h-full flex flex-col" data-testid={`card-testimonial-${testimonial.id}`}>
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      <p className="text-muted-foreground italic leading-relaxed mb-6 flex-1">
        "{testimonial.quote}"
      </p>
      <div className="border-t pt-4">
        <p className="font-semibold text-foreground" data-testid={`text-testimonial-name-${testimonial.id}`}>
          {testimonial.name}
        </p>
        <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-society-${testimonial.id}`}>
          {testimonial.society}
        </p>
      </div>
    </Card>
  );
}
