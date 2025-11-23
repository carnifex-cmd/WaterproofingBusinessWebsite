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
    society: "Shivaji Nagar Complex, Thane",
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
    location: "Laxmi Apartments, Thane",
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

export const projects2 = [
  {
    id: "1",
    title: "IITC Kanjur Pvt. Ltd.",
    location: "Kanjur Marg",
    description: "Waterproofing the external wall of a 300,000 sq.ft building using Dr. Fixit Raincoat.",
    serviceType: "External Wall Waterproofing",
    amount: "₹1,25,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "2",
    title: "IITC Kanjur Pvt. Ltd.",
    location: "Kanjur Marg",
    description: "Terrace waterproofing of 10,000 sq.ft with Brick-bat coba treatment.",
    serviceType: "Terrace Waterproofing",
    amount: "₹30,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "3",
    title: "Kesar Residency Co-op. Hsg. Soc. Ltd.",
    location: "Charkop, Kandivali",
    description: "Complete waterproofing and painting of a 400,000 sq.ft residential building.",
    serviceType: "Building Waterproofing",
    amount: "₹60,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "4",
    title: "Manish Lotus Co-op. Hsg. Soc. Ltd.",
    location: "D.N. Nagar, Andheri",
    description: "Waterproofing and replastering of external and internal walls, covering 75,000 sq.ft.",
    serviceType: "Wall Waterproofing",
    amount: "₹40,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "5",
    title: "N.G. Park Co-op. Hsg. Soc. Ltd.",
    location: "Rawalpada, Borivali-East",
    description: "Comprehensive building restoration including waterproofing, structural repairs, and internal painting of 100,000 sq.ft.",
    serviceType: "Building Restoration",
    amount: "₹40,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "6",
    title: "Andheri Jumbo Co-op. Hsg. Soc. Ltd.",
    location: "Kol Dongari, Andheri",
    description: "Waterproofing and painting of a 40,000 sq.ft residential building.",
    serviceType: "Building Waterproofing",
    amount: "₹30,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "7",
    title: "Topiwala Co-op. Hsg. Soc. Ltd.",
    location: "Goregaon - West",
    description: "Complete waterproofing, structural repair, and internal painting of a 30,000 sq.ft building.",
    serviceType: "Building Repairs",
    amount: "₹30,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "8",
    title: "Vishnu Bhagwan Co-op. Hsg. Soc. Ltd.",
    location: "Andheri-West",
    description: "Building-wide waterproofing, structural repair, and replastering of 80,000 sq.ft.",
    serviceType: "Building Repairs",
    amount: "₹30,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "9",
    title: "Bunglow - Dias",
    location: "Mitchawki, Malad",
    description: "Waterproofing, painting, and plumbing work covering 21,000 sq.ft (including terrace).",
    serviceType: "Waterproofing",
    amount: "₹22,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "10",
    title: "Bunglow - Hebron",
    location: "Mitchawki, Malad",
    description: "Comprehensive waterproofing, painting, and plumbing for a 18,000 sq.ft property, including terrace.",
    serviceType: "Waterproofing",
    amount: "₹20,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "11",
    title: "Jumbo Darshan Co-op. Hsg. Soc. Ltd.",
    location: "Andheri-East",
    description: "Complete coating and painting of a 25,000 sq.ft building, including structural repairs and replastering.",
    serviceType: "Coating & Repairs",
    amount: "₹20,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "12",
    title: "Mistuchem Pvt. Ltd.",
    location: "Boisar",
    description: "Repairing and waterproofing of 25,000 sq.ft external wall and 4,000 sq.ft of terrace.",
    serviceType: "Wall & Terrace Waterproofing",
    amount: "₹20,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "13",
    title: "Neon Laboratories Pvt. Ltd.",
    location: "Palghar",
    description: "Waterproofing, painting, and repair work covering 60,000 sq.ft area.",
    serviceType: "Waterproofing & Repairs",
    amount: "₹20,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "14",
    title: "Vasantrutu Co-op. Hsg. Soc. Ltd.",
    location: "Navpada, Thane-West",
    description: "Waterproofing, painting, and civil repairs covering 27,000 sq.ft.",
    serviceType: "Civil Repairs",
    amount: "₹20,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "15",
    title: "Antariksh Co-op. Hsg. Soc. Ltd.",
    location: "Kalwa",
    description: "Waterproofing, painting, and civil repairs of the entire building and terrace waterproofing covering 30,000 sq.ft.",
    serviceType: "Building & Terrace Waterproofing",
    amount: "₹18,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "16",
    title: "Anuradha Anuja Co-op. Hsg. Soc. Ltd.",
    location: "Borivali-West",
    description: "Terrace and parapet wall waterproofing using Dr. Fixit New coat and Raincoat.",
    serviceType: "Terrace Waterproofing",
    amount: "₹15,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "17",
    title: "Green Meadows, Lokhandwala Complex",
    location: "Kandivali-East",
    description: "Terrace waterproofing of 10,000 sq.ft, coating of parapet wall of 20,000 sq.ft, including structural repairs and replastering.",
    serviceType: "Terrace & Parapet Waterproofing",
    amount: "₹15,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "18",
    title: "Bunglow of Mr. Aacharya",
    location: "Palghar-West",
    description: "Repair, waterproofing, and painting of the entire bungalow.",
    serviceType: "Waterproofing & Repairs",
    amount: "₹10,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "19",
    title: "Sawant Sadan Co-op. Hsg. Soc. Ltd.",
    location: "Borivali-West",
    description: "Terrace waterproofing covering 12,000 sq.ft.",
    serviceType: "Terrace Waterproofing",
    amount: "₹10,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "20",
    title: "Sumeet Sadan Co-op. Hsg. Soc. Ltd.",
    location: "Sitaladevi, Mahim",
    description: "Complete coating and painting of a 15,000 sq.ft building, including structural repairs and replastering.",
    serviceType: "Coating & Repairs",
    amount: "₹10,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "21",
    title: "Prarthana Co-op. Hsg. Soc. Ltd.",
    location: "C.B.D. Belapur",
    description: "Terrace waterproofing of 4,000 sq.ft and complete coating and painting of a 25,000 sq.ft building, including structural repairs and replastering.",
    serviceType: "Terrace & Building Waterproofing",
    amount: "₹10,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "22",
    title: "Bhakti Sudha Co-op. Hsg. Soc. Ltd.",
    location: "Santacruz-East",
    description: "Terrace and external wall waterproofing covering 12,000 sq.ft.",
    serviceType: "Wall Waterproofing",
    amount: "₹10,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "23",
    title: "ManuSmruti Co-op. Hsg. Soc. Ltd.",
    location: "Daulat Nagar, Santacruz",
    description: "Terrace waterproofing of 7,000 sq.ft, coating of parapet wall of 3,000 sq.ft, including structural repairs.",
    serviceType: "Terrace Waterproofing",
    amount: "₹7,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "24",
    title: "Parkside Co-op. Hsg. Soc. Ltd.",
    location: "Raheja Complex, Borivali",
    description: "Terrace waterproofing of 6,000 sq.ft, coating of parapet wall of 3,000 sq.ft, including structural repairs and replastering.",
    serviceType: "Terrace Waterproofing",
    amount: "₹6,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "25",
    title: "The Palm Acres Co-op. Hsg. Soc. Ltd.",
    location: "Mulund - West",
    description: "Terrace waterproofing covering 5,000 sq.ft.",
    serviceType: "Terrace Waterproofing",
    amount: "₹6,00,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "26",
    title: "The Marol Co-op. Hsg. Soc. Ltd.",
    location: "Marol",
    description: "Waterproofing of terrace and parapet wall.",
    serviceType: "Waterproofing",
    amount: "₹5,55,000",
    beforeImage: "",
    afterImage: ""
  },
  {
    id: "27",
    title: "N.G. Park Co-op. Hsg. Soc. Ltd.",
    location: "Rawalpada, Borivali-East",
    description: "Terrace waterproofing, including patch work for terrace and parapet wall.",
    serviceType: "Terrace Waterproofing",
    amount: "₹5,00,000",
    beforeImage: "",
    afterImage: ""
  }
];

export const serviceAreas = ["Mumbai", "Navi Mumbai", "Thane"];

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
