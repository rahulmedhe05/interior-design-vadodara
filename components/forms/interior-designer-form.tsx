"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

interface InteriorDesignerFormProps {
  area?: string;
  keyword?: string;
}

export function InteriorDesignerForm({ area, keyword }: InteriorDesignerFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    propertyType: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const propertyTypes = ["Apartment", "Bungalow", "Villa", "Commercial"];
  
  const services = [
    "Modular Kitchen",
    "Full Home Interior",
    "Bedroom Interior",
    "Living Room Design",
    "Office Interior",
    "Shop Interior",
    "Renovation",
    "Vaastu Consultation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let message = `🏠 *INTERIOR DESIGN ENQUIRY*\n\n`;
    message += `👤 *Name:* ${formData.fullName}\n`;
    message += `📱 *Mobile:* ${formData.mobile}\n`;
    message += `🏢 *Property Type:* ${formData.propertyType}\n`;
    message += `🛠️ *Service:* ${formData.service}\n`;
    if (area) message += `📍 *Area:* ${area}\n`;
    if (keyword) message += `🔍 *Interest:* ${keyword}\n`;
    message += `\n_From: interiordesignvadodara.in_`;

    const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
  };

  const whyChooseUs = [
    "Free 3D Design Consultation",
    "Transparent Pricing - No Hidden Costs",
    "15+ Years Experience in Vadodara",
    "On-Time Project Delivery Guaranteed",
    "Premium Quality Materials",
    "Vaastu Compliant Designs",
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50" id="enquiry-form">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-700">
              Get Free Interior Design Consultation
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Transform your space with Vadodara's most trusted interior designers
              {area && ` in ${area}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: type })}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.propertyType === type
                            ? "bg-amber-600 text-white border-amber-600"
                            : "bg-white text-gray-700 border-gray-200 hover:border-amber-400"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Looking For
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us Now</h3>
                    <p className="text-white/80 text-sm mb-2">Mon-Sat: 9 AM - 8 PM</p>
                    <a href="tel:+916353583148" className="text-lg font-semibold hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">WhatsApp Us</h3>
                    <p className="text-white/80 text-sm mb-2">Quick Response Guaranteed</p>
                    <a
                      href="https://wa.me/916353583148?text=Hi, I need interior design services"
                      target="_blank"
                      className="text-lg font-semibold hover:underline"
                    >
                      Chat Now →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-amber-700">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
