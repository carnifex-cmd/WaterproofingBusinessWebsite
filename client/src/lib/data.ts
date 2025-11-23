import { Service, Testimonial, Project } from "@shared/schema";
import { Home, Droplet, Shield, Wrench, Building2, Hammer } from "lucide-react";

export const services: Service[] = [
  {
    id: "1",
    title: "Terrace Waterproofing",
    description:
      "Complete terrace waterproofing solutions using advanced chemical coatings and membrane systems for long-lasting leak-proof results.",
    icon: "home",
  },
  {
    id: "2",
    title: "Bathroom Leakage Repair",
    description:
      "Expert bathroom and toilet leakage solutions including tile replacement, grouting, and specialized waterproofing treatments.",
    icon: "droplet",
  },
  {
    id: "3",
    title: "Wall Crack Filling & Seepage Control",
    description:
      "Professional crack filling and wall seepage treatment to prevent moisture damage and strengthen structural integrity.",
    icon: "shield",
  },
  {
    id: "4",
    title: "Chemical Coating",
    description:
      "Premium quality chemical coating applications for all types of surfaces providing superior water resistance and durability.",
    icon: "wrench",
  },
  {
    id: "5",
    title: "Water Tank Waterproofing",
    description:
      "Comprehensive water tank waterproofing for underground and overhead tanks ensuring clean water storage and no leakage.",
    icon: "building2",
  },
  {
    id: "6",
    title: "Structural Repairs & Society Maintenance",
    description:
      "Complete building maintenance services including structural repairs, painting, plumbing, and electrical work for housing societies.",
    icon: "hammer",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    society: "Green Valley Society, Thane",
    quote:
      "Excellent work! Our terrace was leaking for years. They fixed it permanently with quality materials and professional service. Highly recommended!",
  },
  {
    id: "2",
    name: "Priya Sharma",
    society: "Sunset Apartments, Mumbai",
    quote:
      "Very satisfied with the bathroom waterproofing. The team was punctual, clean in their work, and the pricing was transparent. No more leakage issues!",
  },
  {
    id: "3",
    name: "Anil Patil",
    society: "Royal Heights, Navi Mumbai",
    quote:
      "Professional team with great expertise. They completed our society building repairs on time and within budget. The quality of work speaks for itself.",
  },
  {
    id: "4",
    name: "Sneha Desai",
    society: "Shivaji Nagar Complex, Pune",
    quote:
      "Outstanding service! They solved our persistent wall seepage problem that other contractors couldn't fix. Very happy with the results and warranty.",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Complete Terrace Waterproofing",
    location: "Sunshine Society, Thane",
    description:
      "300 sq ft terrace was suffering from severe water leakage affecting the top floor. Applied advanced membrane waterproofing system with chemical coating for permanent solution.",
    serviceType: "Terrace Waterproofing",
    beforeImage: "terrace-before",
    afterImage: "terrace-after",
  },
  {
    id: "2",
    title: "Master Bathroom Renovation",
    location: "Palm Residency, Mumbai",
    description:
      "Complete bathroom waterproofing with tile replacement and anti-fungal treatment. Fixed persistent leakage issues and modernized the space.",
    serviceType: "Bathroom Leakage Repair",
    beforeImage: "bathroom-before",
    afterImage: "bathroom-after",
  },
  {
    id: "3",
    title: "External Wall Crack Repair",
    location: "Ganesh Tower, Navi Mumbai",
    description:
      "Repaired major structural cracks in external walls with epoxy injection and waterproof coating to prevent further damage and seepage.",
    serviceType: "Wall Crack Filling",
    beforeImage: "wall-before",
    afterImage: "wall-after",
  },
  {
    id: "4",
    title: "Overhead Tank Waterproofing",
    location: "Laxmi Apartments, Pune",
    description:
      "Complete overhead tank waterproofing including cleaning, crack repair, and food-grade coating application for safe water storage.",
    serviceType: "Water Tank Waterproofing",
    beforeImage: "tank-before",
    afterImage: "tank-after",
  },
  {
    id: "5",
    title: "Society Building Maintenance",
    location: "Sai Kripa Society, Thane",
    description:
      "Comprehensive building maintenance including external painting, plumbing repairs, and structural reinforcement for 50-year-old society building.",
    serviceType: "Structural Repairs",
    beforeImage: "building-before",
    afterImage: "building-after",
  },
  {
    id: "6",
    title: "Balcony Waterproofing",
    location: "Ocean View Towers, Mumbai",
    description:
      "Fixed water seepage from balconies affecting lower floors. Applied specialized waterproofing membrane and decorative flooring.",
    serviceType: "Balcony Waterproofing",
    beforeImage: "balcony-before",
    afterImage: "balcony-after",
  },
];

export const serviceAreas = ["Mumbai", "Navi Mumbai", "Thane", "Pune"];

export const whyChooseUs = [
  {
    title: "20+ Years Experience",
    description:
      "Decades of expertise in waterproofing and building repairs across Maharashtra",
  },
  {
    title: "Trained Professionals",
    description:
      "Certified team with specialized training in modern waterproofing techniques",
  },
  {
    title: "Quality Materials",
    description:
      "Only premium, ISI-certified materials from trusted manufacturers",
  },
  {
    title: "Long-term Warranty",
    description:
      "Comprehensive warranty coverage on all our waterproofing services",
  },
  {
    title: "Timely Execution",
    description:
      "Committed to completing projects on schedule without compromising quality",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs - clear, upfront pricing with detailed quotations",
  },
];
