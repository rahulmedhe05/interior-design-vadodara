import { MetadataRoute } from 'next';
import { getAllAreas } from '@/lib/area-content-data';
import { getAllKeywordPages } from '@/lib/keyword-content-pages';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();
  const weekAgoDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  // Homepage
  const homePage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  };

  // Area pages - 34 Vadodara areas (high priority - local search)
  const areaPages = getAllAreas().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: weekAgoDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Keyword pages - 110 keywords (medium-high priority)
  const keywordPages = getAllKeywordPages().map((slug, index) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: weekAgoDate,
    changeFrequency: 'weekly' as const,
    // Randomize slightly within band (0.78-0.82) to seem fresh
    priority: 0.78 + Math.random() * 0.04,
  }));

  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}/leads`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
  ];

  return [
    homePage,
    ...areaPages,
    ...keywordPages,
    ...staticPages,
  ];
}
