"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { siteConfig } from "@/lib/site-config";

interface BusinessWhatsAppFloatProps {
  business: BusinessConfig;
  area: string;
  keyword?: string;
}

// Form field configurations for interior design
const formConfigs: Record<string, {
  title: string;
  fields: { name: string; label: string; type: string; options?: string[]; required?: boolean }[];
}> = {
  "interior-designers": {
    title: "Interior Design Enquiry",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "mobile", label: "Mobile Number", type: "tel", required: true },
      { name: "propertyType", label: "Property Type", type: "select", options: ["Apartment", "Bungalow", "Villa", "Commercial"], required: true },
      { name: "service", label: "Service Required", type: "select", options: ["Modular Kitchen", "Full Home Interior", "Bedroom Interior", "Living Room", "Office Interior", "Renovation"], required: true },
    ],
  },
};

export function BusinessWhatsAppFloat({ business, area, keyword }: BusinessWhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const config = formConfigs[business.slug] || formConfigs["interior-designers"];
  const areaName = getAreaDisplayName(area);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let message = `🏠 *${siteConfig.businessName.toUpperCase()} ENQUIRY*\n\n`;
    
    config.fields.forEach((field) => {
      if (formData[field.name]) {
        message += `• *${field.label}:* ${formData[field.name]}\n`;
      }
    });
    
    message += `📍 *Area:* ${areaName}, Vadodara\n`;
    if (keyword) message += `🔍 *Interest:* ${keyword}\n`;
    message += `\n_From: ${siteConfig.domain}_`;

    const whatsappURL = `https://wa.me/${siteConfig.contact.phoneClean}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    
    setFormData({});
    setIsOpen(false);
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp Enquiry"
      >
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-ping" />
      </button>

      {/* Enquiry Form Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold" style={{ color: business.colors.primary }}>
              {config.title}
            </DialogTitle>
            <DialogDescription>
              Fill in your details and we'll connect with you on WhatsApp instantly
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {config.fields.map((field, index) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {index + 1}. {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                
                {field.type === "select" && field.options ? (
                  <div className="flex flex-wrap gap-2">
                    {field.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, [field.name]: option })}
                        className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                          formData[field.name] === option
                            ? "text-white"
                            : "border-gray-300 text-gray-700 hover:border-gray-400"
                        }`}
                        style={{
                          backgroundColor: formData[field.name] === option ? business.colors.primary : "transparent",
                          borderColor: formData[field.name] === option ? business.colors.primary : undefined,
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <Input
                    type={field.type}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    value={formData[field.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    required={field.required}
                    className="h-10"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 mt-6"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {isSubmitting ? "Sending..." : "Send on WhatsApp"}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
