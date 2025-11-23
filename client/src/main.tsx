import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add JSON-LD structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shri Siddhivinayak Waterproofing",
  "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=630&fit=crop",
  "@id": "https://shrisiddhivinayakwaterproofing.in",
  "url": "https://shrisiddhivinayakwaterproofing.in",
  "telephone": "+919876543210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mumbai",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0760,
    "longitude": 72.8777
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Mumbai"
    },
    {
      "@type": "City",
      "name": "Navi Mumbai"
    },
    {
      "@type": "City",
      "name": "Thane"
    }
  ],
  "description": "Professional waterproofing and building repair services for terraces, bathrooms, walls, and complete society maintenance across Mumbai, Navi Mumbai, and Thane."
};

// Add structured data to head
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(<App />);
