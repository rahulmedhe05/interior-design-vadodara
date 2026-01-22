"use client";

import Link from "next/link";
import { businesses, getAreaDisplayName } from "@/lib/business-config";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function MegaFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* All Pages Navigation */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">All Our Services - Quick Navigation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {businesses.map((business) => (
              <div key={business.id} className="space-y-2">
                <h3 className="font-bold text-lg border-b border-gray-600 pb-2 flex items-center gap-2">
                  <span>{business.icon}</span>
                  <Link 
                    href={`/${business.slug}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {business.name}
                  </Link>
                </h3>
                <ul className="space-y-1 text-sm">
                  {business.areas.map((area) => (
                    <li key={area}>
                      <Link
                        href={`/${business.slug}/${area}`}
                        className="text-gray-400 hover:text-white transition-colors block py-0.5"
                      >
                        {business.name} in {getAreaDisplayName(area)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-400">+91 98765 43210</p>
                <p className="text-gray-400">+91 98765 43211</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-400">info@yourbusiness.com</p>
                <p className="text-gray-400">support@yourbusiness.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-400">123, Business Hub,</p>
                <p className="text-gray-400">Alkapuri, Vadodara - 390007</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-400">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All Rights Reserved. Premium Services in Vadodara.
          </p>
        </div>
      </div>
    </footer>
  );
}
