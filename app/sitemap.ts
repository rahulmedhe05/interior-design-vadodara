import { MetadataRoute } from 'next';
import { getAllAreas } from '@/lib/area-content-data';
import { getAllKeywordPages } from '@/lib/keyword-content-pages';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  // Homepage
  const homePage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  };

  // Area pages - 34 Vadodara areas
  const areaPages = getAllAreas().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Keyword pages - 35+ keywords
  const keywordPages = getAllKeywordPages().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
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
