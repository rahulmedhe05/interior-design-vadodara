import { getAllKeywordPages } from './keyword-content-pages';
import { getAllAreas } from './area-content-data';

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Parse FAQ section text into structured format
 */
export function parseFAQs(faqText: string): FAQItem[] {
  const items: FAQItem[] = [];
  const questions = faqText.split('**Q:').filter(q => q.length > 0);
  
  questions.forEach(item => {
    const [q, a] = item.split('**A:');
    if (q && a) {
      items.push({
        question: q.trim(),
        answer: a.trim(),
      });
    }
  });
  
  return items;
}

/**
 * Generate FAQ Schema markup for structured data
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Get related keyword pages (for internal linking)
 */
export function getRelatedKeywords(currentSlug: string, limit: number = 5): string[] {
  const allKeywords = getAllKeywordPages();
  
  // Filter out current page
  const related = allKeywords.filter(slug => slug !== currentSlug);
  
  // Sort by relevance (simple: pages with similar keywords come first)
  const currentKeywords = new Set(currentSlug.split('-'));
  related.sort((a, b) => {
    const aMatches = a.split('-').filter(word => currentKeywords.has(word)).length;
    const bMatches = b.split('-').filter(word => currentKeywords.has(word)).length;
    return bMatches - aMatches;
  });
  
  return related.slice(0, limit);
}

/**
 * Get related area pages (for internal linking)
 */
export function getRelatedAreas(limit: number = 3): string[] {
  return getAllAreas().slice(0, limit);
}

/**
 * Generate image alt text based on context
 */
export function generateImageAltText(
  imageTitle: string,
  keyword: string,
  context: 'gallery' | 'hero' | 'section' = 'gallery'
): string {
  const contextMap = {
    gallery: `${imageTitle} - Interior Design in Vadodara`,
    hero: `${keyword} - Professional Interior Design Services`,
    section: `${imageTitle} Interior Design Example`,
  };
  
  return contextMap[context];
}

/**
 * Create breadcrumb schema markup
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ label: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.url,
    })),
  };
}
