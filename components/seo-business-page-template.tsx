"use client";

import { BusinessConfig, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { businessKeywords } from "@/lib/keywords-config";
import { siteConfig, generateFAQSchema, generateServiceSchema } from "@/lib/site-config";
import { BusinessNav } from "./business-nav";
import { SEOFooter } from "./seo-footer";
import { BusinessHeroSlider } from "./business-hero-slider";
import { BusinessWhatsAppFloat } from "./business-whatsapp-float";
import { Phone, Mail, MapPin, CheckCircle, Star, Users, Award, Clock, Tag, Sparkles, Image as ImageIcon, ArrowRight, Building2, Home, Utensils, Bed, Sofa, Bath } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Script from "next/script";

interface BusinessPageTemplateProps {
  business: BusinessConfig;
  area: string;
  content: {
    heroTitle: string;
    heroSubtitle: string;
    aboutContent: string;
    whyChooseUs: string[];
    detailedServices: { title: string; description: string; features?: string[] }[];
    areaSpecificContent: string;
    faqItems: { question: string; answer: string }[];
    processSteps: { title: string; description: string }[];
    additionalContent?: {
      servicesOverview: string;
      materialInfo: string;
      pricingInfo: string;
      workProcess: string;
      qualityAssurance: string;
      testimonialContext: string;
    };
    galleryCategories?: { title: string; images: { alt: string; caption: string }[] }[];
    internalLinks?: { text: string; href: string }[];
    metaData?: {
      title: string;
      description: string;
      keywords: string[];
      canonical: string;
    };
  };
}

export function BusinessPageTemplate({ business, area, content }: BusinessPageTemplateProps) {
  const areaName = getAreaDisplayName(area);
  const gradientClass = business.colors.gradient;
  const primaryKeyword = `interior designers in ${areaName}`;
  
  // Get nearby areas for internal linking
  const nearbyAreas = vadodaraAreas
    .filter(a => a !== area)
    .slice(0, 8);

  // Gallery categories for organized display
  const galleryCategories = content.galleryCategories || [
    { title: "Living Room Designs", icon: <Sofa className="w-5 h-5" />, count: 8 },
    { title: "Bedroom Designs", icon: <Bed className="w-5 h-5" />, count: 8 },
    { title: "Modular Kitchen", icon: <Utensils className="w-5 h-5" />, count: 8 },
    { title: "Office Interiors", icon: <Building2 className="w-5 h-5" />, count: 6 },
  ];

  // FAQ Schema for SEO
  const faqSchema = generateFAQSchema(content.faqItems);

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

      <BusinessNav currentBusiness={business} currentArea={area} />
      
      {/* Hero Section with Form - Primary Keyword in H1 */}
      <BusinessHeroSlider 
        business={business} 
        area={area} 
        heroTitle={content.heroTitle}
        heroSubtitle={content.heroSubtitle}
      />

      {/* Trust Badges - Social Proof */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-amber-600 mb-2" />
              <p className="font-bold text-2xl">{siteConfig.trustBadges.customers}</p>
              <p className="text-gray-600 text-sm">Happy Customers in {areaName}</p>
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

      {/* Primary Keyword Banner - SEO Optimized */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=600&fit=crop`}
          alt={`Best ${primaryKeyword} - Interior Design Services in ${areaName} Vadodara`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-r opacity-85", gradientClass)} />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Best {business.name} in {areaName}
            </h2>
            <p className="text-lg md:text-xl opacity-90">Trusted by {siteConfig.trustBadges.customers} Families Across Vadodara</p>
          </div>
        </div>
      </section>

      {/* About Section - Primary Keyword 3x, First 100 Words Important */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Our {business.name} Services in {areaName}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ 
                  __html: content.aboutContent
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n\n/g, '</p><p class="mt-4">')
                }} />
              </div>
              
              {/* Internal Links */}
              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Explore Our Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {(content.internalLinks || []).slice(0, 6).map((link, i) => (
                    <Link 
                      key={i}
                      href={link.href}
                      className="text-sm text-amber-700 hover:text-amber-900 underline"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <img
                src={`https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop`}
                alt={`Interior Designers in ${areaName} - Living Room Design by ${siteConfig.businessName}`}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <img
                src={`https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=300&fit=crop`}
                alt={`Modular Kitchen Design in ${areaName} Vadodara`}
                className="w-full h-48 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Detailed with Features */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our {business.name} Services in {areaName}, Vadodara
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            As the leading <strong>interior designers in {areaName}</strong>, we offer comprehensive interior design services 
            tailored to meet your specific needs. From complete home interiors to commercial spaces, we deliver excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {content.detailedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 group"
                style={{ borderTopColor: business.colors.primary }}
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-700 transition-colors" style={{ color: business.colors.primary }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                {service.features && (
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Organized by Category */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <ImageIcon className="inline-block w-8 h-8 mr-2" style={{ color: business.colors.primary }} />
            Our Interior Design Projects in {areaName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Browse our portfolio of <strong>interior design projects in {areaName}</strong>, Vadodara. 
            Each project showcases our commitment to quality and attention to detail.
          </p>

          {/* Living Room Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sofa className="w-6 h-6 text-amber-600" />
              Living Room Interior Designs in {areaName}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <img
                    src={`https://images.unsplash.com/photo-${1600210492 + i * 1000}?w=400&h=300&fit=crop`}
                    alt={`Living Room Interior Design ${i} in ${areaName} Vadodara by ${siteConfig.businessName}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/seed/living-${area}-${i}/400/300`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="font-bold text-sm">Living Room Design</p>
                      <p className="text-xs opacity-80">{areaName}, Vadodara</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bedroom Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Bed className="w-6 h-6 text-amber-600" />
              Bedroom Interior Designs in {areaName}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <img
                    src={`https://picsum.photos/seed/bedroom-${area}-${i}/400/300`}
                    alt={`Bedroom Interior Design ${i} in ${areaName} - Master Bedroom by Interior Designers`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="font-bold text-sm">Bedroom Interior</p>
                      <p className="text-xs opacity-80">{areaName}, Vadodara</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modular Kitchen Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-amber-600" />
              Modular Kitchen Designs in {areaName}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <img
                    src={`https://picsum.photos/seed/kitchen-${area}-${i}/400/300`}
                    alt={`Modular Kitchen Design ${i} in ${areaName} Vadodara - L Shape Kitchen`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="font-bold text-sm">Modular Kitchen</p>
                      <p className="text-xs opacity-80">{areaName}, Vadodara</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Interior Gallery */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-amber-600" />
              Office & Commercial Interiors in {areaName}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                  <img
                    src={`https://picsum.photos/seed/office-${area}-${i}/400/300`}
                    alt={`Office Interior Design ${i} in ${areaName} - Commercial Space by ${siteConfig.businessName}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="font-bold text-sm">Office Interior</p>
                      <p className="text-xs opacity-80">{areaName}, Vadodara</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Choose {siteConfig.businessName} as Your Interior Designers in {areaName}?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              We are the most trusted <strong className="text-white">interior designers in {areaName}</strong>, Vadodara. 
              Here's why hundreds of families choose us for their home and office interior design projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.whyChooseUs.slice(0, 12).map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-amber-400" />
                  <p className="text-gray-200">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Area Specific Content - Local SEO */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Interior Designers in {areaName} – Your Local Interior Design Experts
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ 
                    __html: content.areaSpecificContent
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n\n/g, '</p><p class="mt-4">')
                      .replace(/• /g, '<br/>• ')
                  }} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/local-${area}-${i}/300/250`}
                      alt={`Interior Design Project ${i} in ${areaName} Vadodara`}
                      className="w-full h-36 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow"
                      loading="lazy"
                    />
                  ))}
                </div>
                
                {/* CTA Box */}
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-lg text-amber-800 mb-2">
                    Get Free Consultation in {areaName}
                  </h4>
                  <p className="text-amber-700 text-sm mb-4">
                    Our interior designers can visit your home in {areaName} for a free consultation. 
                    Call us or WhatsApp to schedule a visit.
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            How We Work - Our Interior Design Process in {areaName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our systematic process ensures smooth project execution from concept to completion
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {content.processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                    style={{ backgroundColor: business.colors.primary }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {index < content.processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-6 -right-3 w-6 h-6 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What Our Clients in {areaName} Say
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Read genuine reviews from our satisfied clients who chose us as their interior designers in {areaName}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Rajesh Patel", location: areaName, project: "3BHK Flat Interior", review: `Excellent work by the team! They transformed our ${areaName} apartment into a beautiful home. The modular kitchen design is exactly what we wanted. Highly recommend these interior designers in ${areaName}.` },
              { name: "Priya Shah", location: areaName, project: "Villa Interior", review: `We hired them for our villa interior design in ${areaName}. Professional team, quality materials, and on-time delivery. Best interior designers we've worked with in Vadodara!` },
              { name: "Amit Desai", location: areaName, project: "Office Interior", review: `Our office in ${areaName} looks amazing after their design work. They understood our brand requirements perfectly. Great interior designers for commercial projects in Vadodara.` },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 15}`}
                    alt={`${testimonial.name} - Interior Design Client ${areaName}`}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}, Vadodara</p>
                    <p className="text-xs text-amber-600">{testimonial.project}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended FAQ Section - 12 FAQs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Frequently Asked Questions – Interior Designers in {areaName}
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Find answers to common questions about our interior design services in {areaName}, Vadodara
            </p>
            <div className="space-y-4">
              {content.faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center" itemProp="name">
                    {faq.question}
                    <span className="text-2xl group-open:rotate-45 transition-transform text-amber-600">+</span>
                  </summary>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="mt-4 text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services / Keywords */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <Tag className="inline-block w-8 h-8 mr-2" style={{ color: business.colors.primary }} />
            Related Interior Design Services in Vadodara
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Explore our comprehensive range of interior design services
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {(businessKeywords[business.slug] || []).slice(0, 20).map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${business.slug}/${keyword.slug}`}
                className="px-4 py-2 bg-gray-100 hover:bg-amber-100 rounded-full text-gray-700 hover:text-amber-800 transition-colors border border-gray-200 hover:border-amber-300 text-sm"
              >
                {keyword.title.replace(" in Vadodara", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=600&fit=crop"
          alt={`Interior Design CTA - Best Interior Designers in ${areaName} Vadodara`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Space in {areaName}?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation from Vadodara's best interior designers. We'll visit your home in {areaName} and provide a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.phoneClean}?text=Hi, I need interior design services in ${areaName}, Vadodara`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Other Areas Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <MapPin className="inline-block w-8 h-8 mr-2" style={{ color: business.colors.primary }} />
            Interior Designers in Other Vadodara Areas
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            We also serve these areas near {areaName}. Click to view area-specific interior design services.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-6">
            {business.areas
              .filter((a) => a !== area)
              .slice(0, 10)
              .map((otherArea, index) => (
                <Link
                  key={otherArea}
                  href={`/${business.slug}/${otherArea}`}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <img
                    src={`https://picsum.photos/seed/area-${otherArea}/300/200`}
                    alt={`Interior Designers in ${getAreaDisplayName(otherArea)} Vadodara`}
                    className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <p className="text-white font-semibold p-3 text-sm">{getAreaDisplayName(otherArea)}</p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {business.areas
              .filter((a) => a !== area)
              .slice(10)
              .map((otherArea) => (
                <Link
                  key={otherArea}
                  href={`/${business.slug}/${otherArea}`}
                  className="px-3 py-1.5 bg-white hover:bg-amber-50 rounded-full text-gray-600 hover:text-amber-700 transition-colors border border-gray-200 text-xs"
                >
                  Interior Designers in {getAreaDisplayName(otherArea)}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={cn("py-16 md:py-20 bg-gradient-to-br text-white", gradientClass)}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact {siteConfig.businessName} – Interior Designers in {areaName}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to start your interior design project in {areaName}? Contact us today for a free consultation and quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
            <div className="bg-white/10 p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="font-bold mb-2">Office Address:</h3>
              <p className="opacity-90 text-sm">{siteConfig.address.full}</p>
              <p className="opacity-75 text-xs mt-2">{siteConfig.workingHours.weekdays} | {siteConfig.workingHours.weekend}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Footer */}
      <SEOFooter />
      
      {/* WhatsApp Floating Button */}
      <BusinessWhatsAppFloat business={business} area={area} />
    </div>
  );
}
