"use client";

import { useState } from "react";
import Link from "next/link";
import { businesses, getAreaDisplayName, BusinessConfig } from "@/lib/business-config";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessNavProps {
  currentBusiness?: BusinessConfig;
  currentArea?: string;
}

export function BusinessNav({ currentBusiness, currentArea }: BusinessNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const gradientClass = currentBusiness?.colors.gradient || "from-blue-600 to-blue-800";

  return (
    <header className={cn("bg-gradient-to-r text-white sticky top-0 z-50 shadow-lg", gradientClass)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            {currentBusiness ? (
              <span className="flex items-center gap-2">
                <span>{currentBusiness.icon}</span>
                <span className="hidden sm:inline">{currentBusiness.name}</span>
              </span>
            ) : (
              "All Services"
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* All Businesses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("businesses")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors flex items-center gap-1">
                All Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "businesses" && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[250px] max-h-[400px] overflow-y-auto">
                  {businesses.map((business) => (
                    <Link
                      key={business.id}
                      href={`/${business.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <span className="mr-2">{business.icon}</span>
                      {business.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas Dropdown (if on a business page) */}
            {currentBusiness && (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("areas")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors flex items-center gap-1">
                  {currentArea ? getAreaDisplayName(currentArea) : "Select Area"}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "areas" && (
                  <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[200px] max-h-[400px] overflow-y-auto">
                    {currentBusiness.areas.map((area) => (
                      <Link
                        key={area}
                        href={`/${currentBusiness.slug}/${area}`}
                        className={cn(
                          "block px-4 py-2 hover:bg-gray-100 transition-colors",
                          currentArea === area && "bg-gray-100 font-semibold"
                        )}
                      >
                        {getAreaDisplayName(area)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <Link href="#about" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              About
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+916353583148"
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
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm opacity-75">All Services</p>
              <div className="grid grid-cols-2 gap-2">
                {businesses.map((business) => (
                  <Link
                    key={business.id}
                    href={`/${business.slug}`}
                    className="text-sm py-1 hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {business.icon} {business.name}
                  </Link>
                ))}
              </div>
            </div>

            {currentBusiness && (
              <div className="space-y-2 border-t border-white/20 pt-4">
                <p className="text-sm opacity-75">Areas in {currentBusiness.name}</p>
                <div className="grid grid-cols-3 gap-2">
                  {currentBusiness.areas.map((area) => (
                    <Link
                      key={area}
                      href={`/${currentBusiness.slug}/${area}`}
                      className="text-sm py-1 hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {getAreaDisplayName(area)}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-white/20 pt-4">
              <a
                href="tel:+916353583148"
                className="flex items-center justify-center gap-2 bg-white text-gray-900 px-4 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
