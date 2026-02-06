"use client";

import Link from "next/link";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";
import { interiorDesignerKeywords } from "@/lib/keywords-config";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, ExternalLink } from "lucide-react";

export function SEOFooter() {
  // Group keywords by category for organized display
  const keywordCategories = {
    home: interiorDesignerKeywords.filter(k => k.category === "home"),
    bedroom: interiorDesignerKeywords.filter(k => k.category === "bedroom"),
    flat: interiorDesignerKeywords.filter(k => k.category === "flat"),
    living: interiorDesignerKeywords.filter(k => k.category === "living"),
    kitchen: interiorDesignerKeywords.filter(k => k.category === "kitchen"),
    bathroom: interiorDesignerKeywords.filter(k => k.category === "bathroom"),
    kids: interiorDesignerKeywords.filter(k => k.category === "kids"),
    office: interiorDesignerKeywords.filter(k => k.category === "office"),
    commercial: interiorDesignerKeywords.filter(k => k.category === "commercial"),
    renovation: interiorDesignerKeywords.filter(k => k.category === "renovation"),
    services: interiorDesignerKeywords.filter(k => k.category === "services"),
    turnkey: interiorDesignerKeywords.filter(k => k.category === "turnkey"),
  };

  // Popular services for quick links
  const popularServices = [
    "home-interior-design",
    "modular-kitchen",
    "bedroom-interior-design",
    "living-room-interior-design",
    "office-interior-design",
    "3bhk-interior-design",
    "2bhk-interior-design",
    "villa-interior-design",
    "kitchen-design",
    "renovation",
  ];

  // Popular areas (first 15)
  const popularAreas = vadodaraAreas.slice(0, 15);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">🏠 {siteConfig.businessName}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {siteConfig.tagline}. We are Vadodara's most trusted interior design company with 15+ years of experience, 
                500+ completed projects, and a team of 50+ skilled professionals.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-400">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-300 hover:text-white transition-colors block">
                      {siteConfig.contact.phone}
                    </a>
                    <a href={`tel:${siteConfig.contact.alternatePhone}`} className="text-gray-400 hover:text-white transition-colors block">
                      {siteConfig.contact.alternatePhone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-white transition-colors block">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <address className="text-gray-400 not-italic text-xs leading-relaxed">
                    {siteConfig.address.full}
                  </address>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-xs">
                    <p>{siteConfig.workingHours.weekdays}</p>
                    <p>{siteConfig.workingHours.weekend}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Popular Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-400">Popular Services</h3>
              <ul className="space-y-1.5 text-xs">
                {popularServices.map((slug) => {
                  const keyword = interiorDesignerKeywords.find(k => k.slug === slug);
                  return keyword ? (
                    <li key={slug}>
                      <Link
                        href={`/${slug}`}
                        className="text-gray-400 hover:text-amber-400 transition-colors block py-0.5"
                      >
                        {keyword.title.replace(" in Vadodara", "")}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-400">Service Areas in Vadodara</h3>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                {popularAreas.map((area) => (
                  <li key={area}>
                    <Link
                      href={`/${area}`}
                      className="text-gray-400 hover:text-amber-400 transition-colors block py-0.5"
                    >
                      {getAreaDisplayName(area)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                href="/interior-designers" 
                className="text-amber-400 hover:text-amber-300 text-xs mt-3 inline-flex items-center gap-1"
              >
                View All Services <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keyword Links Section - All Service + Area Combinations */}
      <div className="border-b border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-8">
          <h4 className="text-sm font-semibold text-gray-400 mb-4 text-center uppercase tracking-wider">
            Interior Design Services in Vadodara Areas
          </h4>
          
          {/* Service + Area Combinations - Small Font for SEO */}
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 text-[10px] leading-relaxed">
            {/* Interior Designer in All Areas */}
            {vadodaraAreas.map((area) => (
              <Link
                key={`id-${area}`}
                href={`/${area}`}
                className="text-gray-500 hover:text-amber-400 transition-colors block py-0.5 break-inside-avoid"
              >
                Interior Designer in {getAreaDisplayName(area)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* All Keyword Links Section */}
      <div className="border-b border-gray-800 bg-gray-950/50">
        <div className="container mx-auto px-4 py-8">
          <h4 className="text-sm font-semibold text-gray-400 mb-6 text-center uppercase tracking-wider">
            Our Interior Design Services
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-[10px]">
            {/* Home Interior */}
            <div>
              <h5 className="text-gray-300 font-semibold mb-2 text-xs">Home Interior</h5>
              <ul className="space-y-0.5">
                {keywordCategories.home.slice(0, 5).map((k) => (
                  <li key={k.slug}>
                    <Link href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                      {k.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bedroom */}
            <div>
              <h5 className="text-gray-300 font-semibold mb-2 text-xs">Bedroom Design</h5>
              <ul className="space-y-0.5">
                {keywordCategories.bedroom.slice(0, 5).map((k) => (
                  <li key={k.slug}>
                    <Link href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                      {k.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flat Interior */}
            <div>
              <h5 className="text-gray-300 font-semibold mb-2 text-xs">Flat Interior</h5>
              <ul className="space-y-0.5">
                {keywordCategories.flat.map((k) => (
                  <li key={k.slug}>
                    <Link href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                      {k.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kitchen */}
            <div>
              <h5 className="text-gray-300 font-semibold mb-2 text-xs">Kitchen Design</h5>
              <ul className="space-y-0.5">
                {keywordCategories.kitchen.slice(0, 5).map((k) => (
                  <li key={k.slug}>
                    <Link href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                      {k.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div>
              <h5 className="text-gray-300 font-semibold mb-2 text-xs">Office Interior</h5>
              <ul className="space-y-0.5">
                {keywordCategories.office.slice(0, 5).map((k) => (
                  <li key={k.slug}>
                    <Link href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                      {k.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial */}
            <div>
              <h5 className="text-gray-300 font-semibold mb-2 text-xs">Commercial</h5>
              <ul className="space-y-0.5">
                {keywordCategories.commercial.slice(0, 5).map((k) => (
                  <li key={k.slug}>
                    <Link href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                      {k.title.replace(" in Vadodara", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* More Services Row */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px]">
              {keywordCategories.living.slice(0, 3).map((k) => (
                <Link key={k.slug} href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                  {k.title.replace(" in Vadodara", "")}
                </Link>
              ))}
              {keywordCategories.kids.slice(0, 3).map((k) => (
                <Link key={k.slug} href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                  {k.title.replace(" in Vadodara", "")}
                </Link>
              ))}
              {keywordCategories.renovation.map((k) => (
                <Link key={k.slug} href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                  {k.title.replace(" in Vadodara", "")}
                </Link>
              ))}
              {keywordCategories.turnkey.slice(0, 3).map((k) => (
                <Link key={k.slug} href={`/${k.slug}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                  {k.title.replace(" in Vadodara", "")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} <a href={siteConfig.url} className="text-amber-400 hover:text-amber-300">{siteConfig.businessName}</a>. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <p className="text-center">
            Best Interior Designers in Vadodara, Gujarat | Serving All Areas
          </p>
        </div>
      </div>
    </footer>
  );
}
