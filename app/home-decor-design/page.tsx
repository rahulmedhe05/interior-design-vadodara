import { Metadata } from 'next';
import { getKeywordPageContent, generateDynamicKeywordContent } from '@/lib/keyword-content-pages';
import { getAreaContent, getAllAreas } from '@/lib/area-content-data';
import { parseFAQs, getRelatedKeywords, getRelatedAreas } from '@/lib/seo-helpers';
import { UniversalPageTemplate } from '@/components/universal-page-template';
import { businesses } from '@/lib/business-config';
import { siteConfig } from '@/lib/site-config';

const business = businesses[0];
const SLUG = "home-decor-design";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = siteConfig.url;
  const pageUrl = `${siteUrl}/${SLUG}`;
  
  const keywordPage = getKeywordPageContent(SLUG);
  if (keywordPage) {
    return {
      title: keywordPage.metaTitle,
      description: keywordPage.metaDescription,
      keywords: [keywordPage.primaryKeyword, ...keywordPage.lsiKeywords, ...keywordPage.semanticKeywords].join(", "),
      authors: [{ name: siteConfig.businessName }],
      metadataBase: new URL(siteUrl),
      alternates: { canonical: pageUrl },
      openGraph: {
        title: keywordPage.metaTitle,
        description: keywordPage.metaDescription,
        url: pageUrl,
        siteName: siteConfig.businessName,
        type: "website",
        images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: keywordPage.primaryKeyword }],
      },
      twitter: {
        card: "summary_large_image",
        title: keywordPage.metaTitle,
        description: keywordPage.metaDescription,
      },
    };
  }

  const area = getAreaContent(SLUG);
  if (area) {
    const areaKeywords = [
      `interior designers in ${area.name}`,
      `${area.name} interior design`,
      `best interior designers in ${area.name} Vadodara`,
      `home interior design ${area.name}`,
      `interior design services ${area.name} Vadodara`,
      `modular kitchen ${area.name}`,
      `bedroom interior design ${area.name}`,
      `living room design ${area.name}`,
      `office interior ${area.name} Vadodara`,
      `interior decorator ${area.name}`,
      `home renovation ${area.name} Vadodara`,
      `flat interior design ${area.name}`,
      `house interior ${area.name}`,
      `interior design company ${area.name}`,
      `Vadodara interior design`,
    ];
    const areaTitle = `Best Interior Designers in ${area.name}, Vadodara | 500+ Projects ✓ Free 3D Design`;
    const areaDescription = `Looking for expert interior designers in ${area.name}, Vadodara? ✓ 15+ Years Experience ✓ 500+ Happy Clients ✓ Free 3D Consultation ✓ Modular Kitchen, Bedroom, Living Room & Office Interiors. Call ${siteConfig.contact.phone} for a free quote!`;
    return {
      title: areaTitle,
      description: areaDescription,
      keywords: areaKeywords.join(", "),
      authors: [{ name: siteConfig.businessName }],
      metadataBase: new URL(siteUrl),
      alternates: { canonical: pageUrl },
      openGraph: {
        title: `Best Interior Designers in ${area.name}, Vadodara | ${siteConfig.businessName}`,
        description: `Transform your home in ${area.name} with premium interior design. Free 3D consultation, expert designers, affordable packages.`,
        url: pageUrl,
        siteName: siteConfig.businessName,
        type: "website",
        images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: `Interior Design in ${area.name}` }],
      },
      twitter: {
        card: "summary_large_image",
        title: `Best Interior Designers in ${area.name}, Vadodara`,
        description: `Expert interior design services in ${area.name}. Call ${siteConfig.contact.phone}`,
      },
    };
  }

  // Generate dynamic content for unknown keywords
  const dynamicContent = generateDynamicKeywordContent(SLUG);
  return {
    title: dynamicContent.metaTitle,
    description: dynamicContent.metaDescription,
    alternates: { canonical: pageUrl },
  };
}

export default function Page() {
  const keywordPage = getKeywordPageContent(SLUG);
  
  if (keywordPage) {
    const faqs = parseFAQs(keywordPage.faqSection);
    const relatedKeywords = getRelatedKeywords(SLUG, 6);
    const relatedAreas = getRelatedAreas(12);
    
    return (
      <UniversalPageTemplate
        business={business}
        slug={SLUG}
        pageType="keyword"
        content={{
          h1: keywordPage.h1,
          metaTitle: keywordPage.metaTitle,
          metaDescription: keywordPage.metaDescription,
          introContent: keywordPage.introContent,
          mainContent: keywordPage.mainContent,
          faqs: faqs,
          relatedKeywords: relatedKeywords,
          relatedAreas: relatedAreas,
          callToAction: keywordPage.callToAction,
        }}
      />
    );
  }

  const area = getAreaContent(SLUG);
  if (area) {
    const relatedKeywords = getRelatedKeywords("", 6);
    const relatedAreas = getAllAreas().filter(a => a !== SLUG).slice(0, 12);
    
    const faqs = [
      { question: `What interior design services do you offer in ${area.name}?`, answer: `We offer complete home interior design, modular kitchens, bedroom designs, living room interiors, office interiors, and renovation services in ${area.name}, Vadodara.` },
      { question: `How much does interior design cost in ${area.name}?`, answer: `Interior design costs in ${area.name} range from ₹800 to ₹2500 per sq ft depending on materials and design complexity. We offer free consultations for accurate quotes.` },
      { question: `Do you provide free consultation in ${area.name}?`, answer: `Yes! We provide free consultation and 3D design visualization for all projects in ${area.name} and surrounding areas of Vadodara.` },
      { question: `How long does an interior project take in ${area.name}?`, answer: `Typical projects in ${area.name} take 45-90 days depending on scope. We ensure timely delivery with regular progress updates.` },
      { question: `Why choose your services in ${area.name}?`, answer: `With 15+ years experience, 500+ completed projects, and deep knowledge of ${area.name}'s residential preferences, we deliver exceptional results that match your lifestyle.` },
    ];
    
    return (
      <UniversalPageTemplate
        business={business}
        slug={SLUG}
        pageType="area"
        content={{
          h1: `Interior Design in ${area.name}`,
          metaTitle: `Best Interior Designers in ${area.name}, Vadodara`,
          metaDescription: `Expert interior design services in ${area.name}, Vadodara. 15+ years experience, 500+ projects completed.`,
          introContent: `Looking for the **best interior designers in ${area.name}**, Vadodara? ${siteConfig.businessName} brings premium interior design services right to your doorstep in ${area.name}.\n\n${area.areaHistory}\n\nOur team of experienced designers understands the unique requirements of ${area.name} residents. Whether you live in a ${area.propertyTypes.slice(0,2).join(" or ")}, we create stunning interiors that reflect your personality and lifestyle.`,
          mainContent: `## Why Choose Us for Interior Design in ${area.name}?\n\nAs the leading interior design company serving ${area.name}, we bring:\n\n- **Local Expertise**: Deep understanding of ${area.name}'s architectural styles and preferences\n- **Premium Materials**: Access to the best materials and finishes\n- **Experienced Team**: 15+ years of interior design excellence\n- **On-Time Delivery**: Commitment to project timelines\n- **Affordable Pricing**: Competitive rates without compromising quality\n\n## Our Services in ${area.name}\n\nWe offer comprehensive interior design services:\n\n- **Complete Home Interiors**: End-to-end design solutions\n- **Modular Kitchen**: Modern, space-efficient kitchen designs\n- **Bedroom Interior**: Relaxing and stylish bedroom spaces\n- **Living Room Design**: Elegant and functional living areas\n- **Office Interiors**: Professional workspace designs\n- **Renovation Services**: Transform your existing space\n\n## ${area.name} - Area Overview\n\n${area.demographics}\n\nConnectivity: ${area.connectivity}\n\nKey Landmarks: ${area.landmarks.join(", ")}`,
          faqs: faqs,
          relatedKeywords: relatedKeywords,
          relatedAreas: relatedAreas,
          areaName: area.name,
          demographics: area.demographics,
          connectivity: area.connectivity,
          landmarks: area.landmarks,
        }}
      />
    );
  }

  // Fallback for dynamic keywords
  const dynamicContent = generateDynamicKeywordContent(SLUG);
  const faqs = parseFAQs(dynamicContent.faqSection);
  const relatedKeywords = getRelatedKeywords(SLUG, 6);
  const relatedAreas = getRelatedAreas(12);
  
  return (
    <UniversalPageTemplate
      business={business}
      slug={SLUG}
      pageType="keyword"
      content={{
        h1: dynamicContent.h1,
        metaTitle: dynamicContent.metaTitle,
        metaDescription: dynamicContent.metaDescription,
        introContent: dynamicContent.introContent,
        mainContent: dynamicContent.mainContent,
        faqs: faqs,
        relatedKeywords: relatedKeywords,
        relatedAreas: relatedAreas,
        callToAction: dynamicContent.callToAction,
      }}
    />
  );
}
