"use client";

import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { siteConfig, generateFAQSchema } from "@/lib/site-config";
import { BusinessNav } from "./business-nav";
import { SEOFooter } from "./seo-footer";
import { BusinessHeroSlider } from "./business-hero-slider";
import { BusinessWhatsAppFloat } from "./business-whatsapp-float";
import { BusinessContactForm } from "./business-contact-form";
import { Phone, Mail, MapPin, CheckCircle, Star, Users, Award, Clock, Sofa, Bed, Utensils, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Script from "next/script";

interface UniversalPageTemplateProps {
  business: BusinessConfig;
  slug: string;
  pageType: "keyword" | "area";
  content: {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    introContent: string;
    mainContent: string;
    faqs: { question: string; answer: string }[];
    relatedKeywords: string[];
    relatedAreas: string[];
    callToAction?: string;
    // Area specific
    areaName?: string;
    demographics?: string;
    connectivity?: string;
    landmarks?: string[];
  };
}

export function UniversalPageTemplate({ business, slug, pageType, content }: UniversalPageTemplateProps) {
  const displayName = pageType === "area" ? content.areaName || slug.replace(/-/g, ' ') : content.h1;
  const gradientClass = business.colors.gradient;
  
  // FAQ Schema for SEO
  const faqSchema = generateFAQSchema(content.faqs);

  // Add "in Vadodara" for keyword pages if not already present
  const keywordH1 = content.h1.toLowerCase().includes('vadodara') 
    ? content.h1 
    : `${content.h1} in Vadodara`;

  const heroTitle = pageType === "area" 
    ? `Best Interior Designers in ${displayName}, Vadodara`
    : keywordH1;
  
  const heroSubtitle = pageType === "area"
    ? `Transform your home in ${displayName} with premium interior design services. Free 3D consultation, 15+ years experience. Call ${siteConfig.contact.phone}`
    : content.metaDescription;

  return (
    <div className="min-h-screen flex flex-col">
      {/* JSON-LD Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteConfig.schema) }}
      />

      <BusinessNav currentBusiness={business} currentArea={slug} />
      
      {/* Hero Section with Form */}
      <BusinessHeroSlider 
        business={business} 
        area={slug} 
        heroTitle={heroTitle}
        heroSubtitle={heroSubtitle}
      />

      {/* Trust Badges */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">{siteConfig.trustBadges.customers}</p>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-bold text-2xl">{siteConfig.trustBadges.rating}</p>
              <p className="text-gray-600 text-sm">Google Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-green-600 mb-2" />
              <p className="font-bold text-2xl">{siteConfig.trustBadges.experience}</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 text-purple-600 mb-2" />
              <p className="font-bold text-2xl">{siteConfig.trustBadges.projects}</p>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=600&fit=crop"
          alt={`${heroTitle} - Interior Design Services`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-r opacity-85", gradientClass)} />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {pageType === "area" ? `Interior Design in ${displayName}` : keywordH1}
            </h2>
            <p className="text-lg md:text-xl opacity-90">Trusted by {siteConfig.trustBadges.customers} Families Across Vadodara</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {pageType === "area" 
                  ? `About Interior Design Services in ${displayName}`
                  : `About ${keywordH1}`
                }
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ 
                  __html: content.introContent
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .split('\n\n').map(p => `<p class="mb-4">${p}</p>`).join('')
                }} />
              </div>
              
              {/* Quick Info for Areas */}
              {pageType === "area" && content.demographics && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-1">Demographics</h4>
                    <p className="text-sm text-blue-700">{content.demographics}</p>
                  </div>
                  {content.connectivity && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-1">Connectivity</h4>
                      <p className="text-sm text-green-700">{content.connectivity}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Related Services Links */}
              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Explore Our Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {content.relatedKeywords.slice(0, 6).map((keyword, i) => (
                    <Link 
                      key={i}
                      href={`/${keyword}`}
                      className="text-sm text-amber-700 hover:text-amber-900 underline capitalize"
                    >
                      {keyword.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop"
                alt={`${heroTitle} - Living Room Design`}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=300&fit=crop"
                alt={`Modular Kitchen Design`}
                className="w-full h-48 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div dangerouslySetInnerHTML={{ 
              __html: content.mainContent
                .replace(/##\s*(.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/-\s*\*\*(.*?)\*\*:\s*/g, '<li class="mb-2"><strong>$1:</strong> ')
                .split('\n\n').filter(p => p.trim()).map(p => {
                  if (p.startsWith('<h2') || p.startsWith('<li')) return p;
                  return `<p class="mb-4 text-gray-700">${p}</p>`;
                }).join('')
            }} />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Interior Design Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Browse our portfolio of premium interior design projects in Vadodara.
          </p>

          {/* Living Room Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sofa className="w-6 h-6 text-amber-600" />
              Living Room Designs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "photo-1600210492486-724fe5c67fb3",
                "photo-1616486338812-3dadae4b4ace", 
                "photo-1615529182904-14819c35db37",
                "photo-1600607687939-ce8a6c25118c"
              ].map((photo, i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <img
                    src={`https://images.unsplash.com/${photo}?w=400&h=300&fit=crop`}
                    alt={`Living Room Design ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bedroom Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Bed className="w-6 h-6 text-blue-600" />
              Bedroom Designs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "photo-1616594039964-ae9021a400a0",
                "photo-1618773928121-c32242e63f39",
                "photo-1617325247661-675ab4b64ae2",
                "photo-1615874959474-d609969a20ed"
              ].map((photo, i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <img
                    src={`https://images.unsplash.com/${photo}?w=400&h=300&fit=crop`}
                    alt={`Bedroom Design ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen Gallery */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-green-600" />
              Modular Kitchen Designs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "photo-1556909114-f6e7ad7d3136",
                "photo-1556909114-44e3e70034e2",
                "photo-1600585154526-990dced4db0d",
                "photo-1600566752355-35792bedcfea"
              ].map((photo, i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <img
                    src={`https://images.unsplash.com/${photo}?w=400&h=300&fit=crop`}
                    alt={`Kitchen Design ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Common questions about our interior design services
          </p>
          
          <div className="space-y-4">
            {content.faqs.map((faq, index) => (
              <details 
                key={index} 
                className="p-6 bg-white rounded-xl border shadow-sm cursor-pointer group"
              >
                <summary className="font-semibold text-lg text-gray-900 group-open:text-amber-700 transition-colors list-none flex justify-between items-center">
                  <span>Q: {faq.question}</span>
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  A: {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.callToAction || `Ready to Transform Your Space?`}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and 3D design visualization for your dream interior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: {siteConfig.contact.phone}
            </a>
            <a
              href={`https://wa.me/91${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Related Areas Section */}
      {content.relatedAreas.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Service Areas in Vadodara
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {content.relatedAreas.map((area) => (
                <Link
                  key={area}
                  href={`/${area}`}
                  className="p-4 bg-gray-50 hover:bg-amber-50 rounded-lg text-center transition-colors border hover:border-amber-300"
                >
                  <span className="font-medium text-gray-800 capitalize">{area.replace(/-/g, ' ')}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className={cn("py-16 md:py-20 text-white bg-gradient-to-r", gradientClass)}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact Us
          </h2>
          <p className="text-center opacity-90 mb-12 max-w-2xl mx-auto">
            Ready to start your interior design project? Contact us today for a free consultation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Phone className="w-8 h-8 mb-3" />
              <p className="font-bold">Call Us</p>
              <p className="opacity-90">{siteConfig.contact.phone}</p>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Mail className="w-8 h-8 mb-3" />
              <p className="font-bold">Email Us</p>
              <p className="opacity-90 text-sm">{siteConfig.contact.email}</p>
            </a>
            <a
              href={siteConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-8 h-8 mb-3" />
              <p className="font-bold">Visit Us</p>
              <p className="opacity-90 text-sm">{siteConfig.address.area}, {siteConfig.address.city}</p>
            </a>
          </div>
          <div className="bg-white/10 p-6 rounded-xl max-w-2xl mx-auto text-center">
            <h3 className="font-bold mb-2">Office Address:</h3>
            <p className="opacity-90 text-sm">{siteConfig.address.full}</p>
            <p className="opacity-75 text-xs mt-2">{siteConfig.workingHours.weekdays} | {siteConfig.workingHours.weekend}</p>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <SEOFooter />
      
      {/* WhatsApp Floating Button */}
      <BusinessWhatsAppFloat business={business} area={slug} />
    </div>
  );
}
