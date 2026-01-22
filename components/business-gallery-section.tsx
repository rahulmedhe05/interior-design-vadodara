"use client";

import { useState, useCallback, useMemo } from "react";
import { BusinessConfig } from "@/lib/business-config";
import { KeywordConfig } from "@/lib/keywords-config";
import { Search, ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessGallerySectionProps {
  business: BusinessConfig;
  keyword?: KeywordConfig;
  area?: string;
}

// Generate 50 demo images for interior design using picsum
const businessGalleryImages: Record<string, string[]> = {
  "interior-designers": [
    "1618221195710-dd6b41faaea6", "1600210492486-724fe5c67fb0", "1616486338812-3dadae4b4ace",
    "1586023492125-27b2c045efd7", "1600607687939-ce8a6c25118c", "1618219908412-a29a1bb7b86e",
    "1631679706909-1844bbd07221", "1600566753086-00f18fb6b3ea", "1600585154340-be6161a56a0c",
    "1556909172-54557c7e4fb7", "1555041469-a586c61ea9bc", "1600596542815-ffad4c1539a9",
    "1616137466211-f939a420be84", "1600607687920-4e03f0e6f0b3", "1618219740975-db2b1b6b2dcd",
    "1560448204-e02f11c3d0e2", "1565538810643-b5bdb714032a", "1600573472550-8090b5e0745e",
    "1600585154526-990dced4db0d", "1600566753190-17f0baa2a6c3", "1560185127-6a4b2ad4e0e5",
    "1600585154526-990dced4db0d", "1618219908412-a29a1bb7b86e", "1631679706909-1844bbd07221",
    "1600210492486-724fe5c67fb0", "1616486338812-3dadae4b4ace", "1586023492125-27b2c045efd7",
    "1600607687939-ce8a6c25118c", "1631679706909-1844bbd07221", "1600566753086-00f18fb6b3ea",
    "1556909172-54557c7e4fb7", "1555041469-a586c61ea9bc", "1600596542815-ffad4c1539a9",
    "1616137466211-f939a420be84", "1600607687920-4e03f0e6f0b3", "1618219740975-db2b1b6b2dcd",
    "1560448204-e02f11c3d0e2", "1565538810643-b5bdb714032a", "1600573472550-8090b5e0745e",
    "1600585154526-990dced4db0d", "1600566753190-17f0baa2a6c3", "1560185127-6a4b2ad4e0e5",
    "1618221195710-dd6b41faaea6", "1600210492486-724fe5c67fb0", "1616486338812-3dadae4b4ace",
    "1586023492125-27b2c045efd7", "1600607687939-ce8a6c25118c", "1618219908412-a29a1bb7b86e",
    "1631679706909-1844bbd07221", "1600566753086-00f18fb6b3ea",
  ],
};

export function BusinessGallerySection({ business, keyword, area }: BusinessGallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(12);
  
  const imageIds = businessGalleryImages[business.slug] || businessGalleryImages["interior-designers"];
  const keywordText = (keyword && typeof keyword === 'object' && 'keyword' in keyword) ? (keyword as any).keyword : business.name;
  const areaText = area?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Vadodara";

  const images = useMemo(() => 
    imageIds.map((id, index) => ({
      id: index + 1,
      url: `https://images.unsplash.com/photo-${id}?w=600&h=400&fit=crop`,
      fullUrl: `https://images.unsplash.com/photo-${id}?w=1200&h=800&fit=crop`,
      alt: `${keywordText} ${areaText} - Image ${index + 1}`,
      title: `${keywordText} in ${areaText} - Project ${index + 1}`,
    })),
  [imageIds, keywordText, areaText]);

  const loadMore = useCallback(() => {
    setVisibleImages((prev) => Math.min(prev + 12, images.length));
  }, [images.length]);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % images.length : 0);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + images.length) % images.length : 0);

  const gradientClass = business.colors.gradient;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-1 rounded-full text-white text-sm font-semibold mb-4",
            gradientClass
          )}>
            <Images className="w-4 h-4" />
            <span>Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our {keywordText} Portfolio in {areaText}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of {keywordText.toLowerCase()} projects completed across {areaText} and Vadodara.
            Each project showcases our commitment to quality {keywordText.toLowerCase()} services.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <Search className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium truncate">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < images.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className={cn(
                "px-8 py-3 rounded-full text-white font-semibold transition-all hover:scale-105",
                gradientClass
              )}
            >
              Load More ({images.length - visibleImages} remaining)
            </button>
          </div>
        )}

        {/* SEO Text with Keyword Density */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Best {keywordText} Projects in {areaText}, Vadodara
          </h3>
          <p className="text-gray-600 mb-3">
            Our gallery showcases the finest {keywordText.toLowerCase()} work we have completed in {areaText}. 
            As the leading {keywordText.toLowerCase()} provider in {areaText}, we take pride in delivering exceptional 
            results for our clients. Browse through {images.length}+ {keywordText.toLowerCase()} images from our 
            portfolio in {areaText} and throughout Vadodara.
          </p>
          <p className="text-gray-500 text-sm">
            Showing {Math.min(visibleImages, images.length)} of {images.length} {keywordText.toLowerCase()} images from {areaText}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={images[selectedImage].fullUrl}
              alt={images[selectedImage].alt}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{images[selectedImage].title}</p>
              <p className="text-white/60 text-sm mt-1">{selectedImage + 1} / {images.length}</p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
