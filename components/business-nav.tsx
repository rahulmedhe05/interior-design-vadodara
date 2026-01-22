"use client";

import { useState } from "react";
import Link from "next/link";
import { BusinessConfig } from "@/lib/business-config";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface BusinessNavProps {
  currentBusiness?: BusinessConfig;
  currentArea?: string;
}

export function BusinessNav({ currentBusiness, currentArea }: BusinessNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gradientClass = currentBusiness?.colors.gradient || "from-slate-800 to-slate-900";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn("bg-gradient-to-r text-white sticky top-0 z-50 shadow-lg", gradientClass)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            <span className="flex items-center gap-2">
              <span>🏠</span>
              <span className="hidden sm:inline">{siteConfig.businessName}</span>
              <span className="sm:hidden">Nesture</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors font-medium">
              Home
            </Link>
            <button 
              onClick={() => scrollToSection("about")} 
              className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("gallery")} 
              className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
            >
              Contact
            </button>

            <div className="border-t border-white/20 pt-4 mt-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now: {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
