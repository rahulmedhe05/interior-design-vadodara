import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
        disallow: ['/api/', '/_next/', '/admin/', '/*.json$', '/private/', '/temp/', '/preview/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
        disallow: ['/api/', '/_next/', '/admin/', '/*.json$', '/private/', '/temp/', '/preview/'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        crawlDelay: 2,
        disallow: ['/api/', '/_next/', '/admin/', '/*.json$', '/private/', '/temp/', '/preview/'],
      },
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 3,
        requestRate: { requests: 10, seconds: 60 },
        disallow: ['/api/', '/_next/', '/admin/', '/*.json$', '/private/', '/temp/', '/preview/'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/sitemap-mobile.xml`],
    host: baseUrl,
  };
}
