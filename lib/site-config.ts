// Site Configuration - Single source of truth for branding and contact details

export const siteConfig = {
  // Domain & URLs
  domain: "interiordesignvadodara.in",
  url: "https://interiordesignvadodara.in",
  
  // Business Name
  businessName: "Interior Design Vadodara",
  shortName: "IDV",
  tagline: "Transform Your Space with Expert Interior Design in Vadodara",
  
  // Contact Details
  contact: {
    phone: "+91 63535 83148",
    phoneClean: "916353583148", // For WhatsApp links
    alternatePhone: "+91 63535 83149",
    email: "info@interiordesignvadodara.in",
    supportEmail: "support@interiordesignvadodara.in",
  },
  
  // Office Address
  address: {
    street: "301, Shree Krishna Complex, Near HDFC Bank",
    area: "Alkapuri",
    city: "Vadodara",
    state: "Gujarat",
    country: "India",
    pincode: "390007",
    full: "301, Shree Krishna Complex, Near HDFC Bank, Alkapuri, Vadodara, Gujarat 390007, India",
    googleMapsUrl: "https://maps.google.com/?q=Alkapuri+Vadodara+Gujarat",
  },
  
  // Working Hours
  workingHours: {
    weekdays: "Monday - Saturday: 9:00 AM - 7:00 PM",
    weekend: "Sunday: By Appointment Only",
    support: "24/7 WhatsApp Support Available",
  },
  
  // Social Media
  social: {
    facebook: "https://facebook.com/interiordesignvadodara",
    instagram: "https://instagram.com/interiordesignvadodara",
    twitter: "https://twitter.com/idvadodara",
    linkedin: "https://linkedin.com/company/interiordesignvadodara",
    youtube: "https://youtube.com/@interiordesignvadodara",
    pinterest: "https://pinterest.com/interiordesignvadodara",
  },
  
  // SEO Defaults
  seo: {
    title: "Best Interior Designers in Vadodara | Interior Design Vadodara",
    description: "Looking for the best interior designers in Vadodara? Interior Design Vadodara offers premium home & office interior design services. 15+ years experience, 500+ projects completed. Free 3D design consultation!",
    keywords: [
      "interior designers in vadodara",
      "best interior designers vadodara",
      "home interior design vadodara",
      "modular kitchen vadodara",
      "office interior design vadodara",
    ],
  },
  
  // Schema.org Organization Data
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://interiordesignvadodara.in",
    "name": "Interior Design Vadodara",
    "image": "https://interiordesignvadodara.in/logo.png",
    "telephone": "+91 63535 83148",
    "email": "info@interiordesignvadodara.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "301, Shree Krishna Complex, Near HDFC Bank",
      "addressLocality": "Alkapuri, Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.3072",
      "longitude": "73.1812"
    },
    "url": "https://interiordesignvadodara.in",
    "priceRange": "₹₹₹",
    "openingHours": "Mo-Sa 09:00-19:00",
    "sameAs": [
      "https://facebook.com/interiordesignvadodara",
      "https://instagram.com/interiordesignvadodara",
      "https://linkedin.com/company/interiordesignvadodara"
    ]
  },
  
  // Trust Badges Data
  trustBadges: {
    customers: "5000+",
    rating: "4.9/5",
    experience: "15+",
    projects: "500+",
  },
};

// Helper function to generate page-specific schema
export function generatePageSchema(pageData: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "image": pageData.image || `${siteConfig.url}/og-image.jpg`,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.businessName,
      "logo": `${siteConfig.url}/logo.png`
    }
  };
}

// Helper function to generate FAQ schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Helper function to generate Service schema
export function generateServiceSchema(service: {
  name: string;
  description: string;
  area: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessName,
      "address": siteConfig.schema.address
    },
    "areaServed": {
      "@type": "City",
      "name": `${service.area}, Vadodara, Gujarat, India`
    },
    "priceRange": service.price || "₹₹₹"
  };
}
