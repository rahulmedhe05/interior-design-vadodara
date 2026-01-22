import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getKeywordPageContent } from '@/lib/keyword-content-pages';
import { getAreaContent } from '@/lib/area-content-data';
import { parseFAQs, generateFAQSchema, getRelatedKeywords, getRelatedAreas, generateBreadcrumbSchema } from '@/lib/seo-helpers';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const slug = "fatehgunj";
  const siteUrl = "https://interiordesignvadodara.in";
  const pageUrl = `${siteUrl}/${slug}`;
  
  const keywordPage = getKeywordPageContent(slug);
  if (keywordPage) {
    return {
      title: keywordPage.metaTitle,
      description: keywordPage.metaDescription,
      keywords: [keywordPage.primaryKeyword, ...keywordPage.lsiKeywords, ...keywordPage.semanticKeywords].join(", "),
      authors: [{ name: "Interior Design Vadodara" }],
      metadataBase: new URL(siteUrl),
      alternates: { canonical: pageUrl },
      openGraph: {
        title: keywordPage.metaTitle,
        description: keywordPage.metaDescription,
        url: pageUrl,
        siteName: "Interior Design Vadodara",
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

  const area = getAreaContent(slug);
  if (area) {
    return {
      title: `${area.name} Interior Design in Vadodara | Professional Services`,
      description: `Expert interior design in ${area.name}, Vadodara. Professional home & office design services.`,
      keywords: [`${area.name} interior design`, area.name, "Vadodara interior design"].join(", "),
      authors: [{ name: "Interior Design Vadodara" }],
      metadataBase: new URL(siteUrl),
      alternates: { canonical: pageUrl },
      openGraph: {
        title: `${area.name} Interior Design in Vadodara`,
        description: `Expert interior design services in ${area.name}`,
        url: pageUrl,
        type: "website",
      },
    };
  }

  return { title: "Page Not Found" };
}

export default function Page() {
  const slug = "fatehgunj";
  const siteUrl = "https://interiordesignvadodara.in";
  const pageUrl = `${siteUrl}/${slug}`;

  const keywordPage = getKeywordPageContent(slug);
  if (keywordPage) {
    const faqs = parseFAQs(keywordPage.faqSection);
    const relatedKeywords = getRelatedKeywords(slug, 5);
    const relatedAreas = getRelatedAreas(3);
    
    const breadcrumbs = [
      { label: 'Home', url: siteUrl },
      { label: keywordPage.primaryKeyword, url: pageUrl },
    ];

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }) }} />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.url,
          })),
        }) }} />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: keywordPage.h1,
          description: keywordPage.metaDescription,
          image: `${siteUrl}/og-image.jpg`,
          datePublished: new Date().toISOString(),
          author: { "@type": "Organization", name: "Interior Design Vadodara", url: siteUrl },
          publisher: { "@type": "Organization", name: "Interior Design Vadodara" },
        }) }} />

        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-slate-600">
            <Link href="/">Home</Link> / <span className="text-slate-900">{keywordPage.primaryKeyword}</span>
          </div>

          <article className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{keywordPage.h1}</h1>
            
            <section className="prose prose-lg max-w-none mb-12">
              <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: keywordPage.introContent.split("\n\n").map((p: string) => `<p>${p}</p>`).join("") }} />
            </section>

            <section className="prose prose-lg max-w-none mb-12">
              <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: keywordPage.mainContent.split("##").map((s: string, i: number) => {
                if (i === 0) return "";
                const [h, ...c] = s.split("\n");
                return `<div class="mb-8"><h2 class="text-2xl font-bold mb-4 mt-8">${h.trim()}</h2><div>${c.join("\n").trim().split("\n\n").map((p: string) => `<p>${p}</p>`).join("")}</div></div>`;
              }).join("") }} />
            </section>

            <section className="mb-12 bg-slate-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq: any, index: number) => (
                  <details key={index} className="p-4 bg-white rounded-lg border cursor-pointer group">
                    <summary className="font-semibold text-slate-900 group-open:text-blue-600 transition-colors">
                      Q: {faq.question}
                    </summary>
                    <p className="mt-3 text-slate-700 leading-relaxed">A: {faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-lg text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{keywordPage.callToAction}</h2>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Book Free Consultation
              </button>
            </section>

            {relatedKeywords.length > 0 && (
              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Related Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedKeywords.map((keyword: string) => (
                    <Link key={keyword} href={`/${keyword}`} className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="text-blue-600 font-semibold capitalize">{keyword.replace(/-/g, ' ')}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {relatedAreas.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold mb-6">Our Service Areas</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedAreas.map((area: string) => (
                    <Link key={area} href={`/${area}`} className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <span className="text-green-600 font-semibold capitalize">{area.replace(/-/g, ' ')}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </>
    );
  }

  const area = getAreaContent(slug);
  if (area) {
    const relatedKeywords = getRelatedKeywords("", 5);
    
    const breadcrumbs = [
      { label: 'Home', url: siteUrl },
      { label: area.name, url: pageUrl },
    ];

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.url,
          })),
        }) }} />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Interior Design in ${area.name}`,
          description: `Professional interior design services in ${area.name}, Vadodara`,
          areaServed: area.name,
          url: pageUrl,
          image: `${siteUrl}/og-image.jpg`,
        }) }} />

        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-slate-600">
            <Link href="/">Home</Link> / <span className="text-slate-900">{area.name}</span>
          </div>

          <article className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Interior Design in {area.name}, Vadodara</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Demographics</h3>
                <p className="text-sm text-slate-700">{area.demographics}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Connectivity</h3>
                <p className="text-sm text-slate-700">{area.connectivity}</p>
              </div>
            </div>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">About {area.name}</h2>
              <p className="text-slate-700 leading-relaxed">{area.areaHistory}</p>
            </section>

            <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-lg text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Transform Your Space in {area.name}</h2>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Book Free Consultation
              </button>
            </section>

            {relatedKeywords.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold mb-6">Our Interior Design Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedKeywords.slice(0, 6).map((keyword: string) => (
                    <Link key={keyword} href={`/${keyword}`} className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="text-blue-600 font-semibold capitalize">{keyword.replace(/-/g, ' ')}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </>
    );
  }

  return <div>Page not found</div>;
}
