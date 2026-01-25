import { businesses } from "@/lib/business-config";
import { getInteriorDesignersContent } from "@/lib/seo-content-generator";
import { siteConfig } from "@/lib/site-config";
import { BusinessPageTemplate } from "@/components/seo-business-page-template";
import { Metadata } from "next";

// Get the interior designers business
const business = businesses[0]; // Interior Designers is the first (and only) business

// Generate metadata for SEO - Homepage
export const metadata: Metadata = {
  title: `Best Interior Designers in Vadodara | 500+ Projects ✓ Free 3D Design`,
  description: `Looking for the best interior designers in Vadodara? ✓ 15+ Years Experience ✓ 500+ Happy Clients ✓ Free 3D Consultation ✓ Modular Kitchen, Bedroom, Living Room & Office Interiors. Call ${siteConfig.contact.phone} for a free quote!`,
  keywords: [
    "interior designers in vadodara",
    "best interior designers vadodara",
    "interior design vadodara",
    "home interior design vadodara",
    "modular kitchen vadodara",
    "office interior design vadodara",
    "bedroom interior vadodara",
    "living room design vadodara",
    "3bhk interior design vadodara",
    "2bhk interior vadodara",
    "interior decorator vadodara",
    "home interiors vadodara",
    "flat interior design vadodara",
    "house interior vadodara",
    "interior design company vadodara",
    "home renovation vadodara",
    "kitchen interior design vadodara",
    "luxury interior design vadodara",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `Best Interior Designers in Vadodara | ${siteConfig.businessName}`,
    description: `Transform your space with Vadodara's most trusted interior designers. ✓ Free 3D consultation ✓ 15+ years experience ✓ 500+ projects completed.`,
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designers in Vadodara | 500+ Projects",
    description: `Premium interior design services in Vadodara. ✓ Free 3D Design ✓ Call ${siteConfig.contact.phone}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  const content = getInteriorDesignersContent("vadodara");
  
  return <BusinessPageTemplate business={business} area="vadodara" content={content} />;
}
