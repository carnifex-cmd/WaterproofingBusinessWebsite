import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = "waterproofing services, terrace waterproofing, bathroom leakage repair, society building repairs, Mumbai, Thane, Navi Mumbai",
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=630&fit=crop"
}: SEOHeadProps) {
  const fullTitle = `${title} | Shri Siddhivinayak Waterproofing`;
  const siteUrl = typeof window !== 'undefined' ? window.location.href : 'https://shrisiddhivinayakwaterproofing.in';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
}
