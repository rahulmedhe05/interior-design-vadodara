"use client"

import { useState } from "react"

interface GalleryItem {
  id: number
  type: "image"
  src: string
  title: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, type: "image", src: "/1.png", title: "Modern Living Room", alt: "Modern Living Room Interior Design in Vadodara" },
  { id: 2, type: "image", src: "/2.png", title: "Luxury Bedroom Suite", alt: "Luxury Bedroom Design - Interior Design Vadodara" },
  { id: 3, type: "image", src: "/3.png", title: "Contemporary Kitchen", alt: "Contemporary Kitchen Interior Design in Vadodara" },
  { id: 4, type: "image", src: "/4.png", title: "Office Space Design", alt: "Professional Office Interior Design Services" },
  { id: 5, type: "image", src: "/5.png", title: "Minimalist Home", alt: "Minimalist Home Interior Design" },
  { id: 6, type: "image", src: "/6.png", title: "Commercial Space", alt: "Commercial Interior Design in Vadodara" },
  { id: 7, type: "image", src: "/7.png", title: "Elegant Dining Area", alt: "Elegant Dining Room Design" },
  { id: 8, type: "image", src: "/8.png", title: "Luxury Home Spa", alt: "Luxury Home Spa Interior Design" },
  { id: 9, type: "image", src: "/9.png", title: "Kids Room Design", alt: "Kids Room Interior Design - Creative Spaces" },
  { id: 10, type: "image", src: "/10.png", title: "Master Bedroom", alt: "Master Bedroom Interior Design in Vadodara" },
  { id: 11, type: "image", src: "/11.png", title: "Modular Kitchen", alt: "Modular Kitchen Design - Interior Design Vadodara" },
  { id: 12, type: "image", src: "/12.png", title: "Living Room Decor", alt: "Living Room Decoration and Design" },
  { id: 13, type: "image", src: "/13.png", title: "Wardrobe Design", alt: "Wardrobe Interior Design - Storage Solutions" },
  { id: 14, type: "image", src: "/14.png", title: "Study Room", alt: "Study Room Interior Design" },
  { id: 15, type: "image", src: "/15.png", title: "Pooja Room", alt: "Pooja Room Design - Interior Design Vadodara" },
  { id: 16, type: "image", src: "/16.png", title: "Balcony Design", alt: "Balcony Interior Design and Decoration" },
  { id: 17, type: "image", src: "/17.png", title: "Foyer Entrance", alt: "Foyer Entrance Design - First Impression" },
  { id: 18, type: "image", src: "/18.png", title: "TV Unit Design", alt: "TV Unit Interior Design - Living Room Focus" },
  { id: 19, type: "image", src: "/19.png", title: "Bathroom Interior", alt: "Bathroom Interior Design - Modern Solutions" },
  { id: 20, type: "image", src: "/20.png", title: "Guest Bedroom", alt: "Guest Bedroom Interior Design" },
  { id: 21, type: "image", src: "/21.png", title: "False Ceiling", alt: "False Ceiling Design - Contemporary Style" },
  { id: 22, type: "image", src: "/22.png", title: "Wall Paneling", alt: "Wall Paneling Interior Design" },
  { id: 23, type: "image", src: "/23.png", title: "Home Office", alt: "Home Office Interior Design - Work Space" },
  { id: 24, type: "image", src: "/24.png", title: "Dining Table Setup", alt: "Dining Table and Room Setup Design" },
  { id: 25, type: "image", src: "/25.png", title: "Crockery Unit", alt: "Crockery Unit Design - Kitchen Storage" },
  { id: 26, type: "image", src: "/26.png", title: "Bar Counter", alt: "Bar Counter Interior Design" },
  { id: 27, type: "image", src: "/27.png", title: "Shoe Rack Design", alt: "Shoe Rack Design - Organized Storage" },
  { id: 28, type: "image", src: "/28.png", title: "Partition Design", alt: "Partition Design - Space Division" },
  { id: 29, type: "image", src: "/29.png", title: "Window Treatments", alt: "Window Treatments and Curtain Design" },
  { id: 30, type: "image", src: "/30.png", title: "Lighting Design", alt: "Interior Lighting Design - Ambiance Creation" },
  { id: 31, type: "image", src: "/31.png", title: "Flooring Patterns", alt: "Flooring Design and Patterns" },
  { id: 32, type: "image", src: "/32.png", title: "Open Kitchen", alt: "Open Kitchen Design - Modern Layout" },
  { id: 33, type: "image", src: "/33.png", title: "L-Shape Kitchen", alt: "L-Shape Kitchen Design" },
  { id: 34, type: "image", src: "/34.png", title: "U-Shape Kitchen", alt: "U-Shape Kitchen Interior Design" },
  { id: 35, type: "image", src: "/35.png", title: "Island Kitchen", alt: "Island Kitchen Design - Central Focus" },
  { id: 36, type: "image", src: "/36.png", title: "Compact Kitchen", alt: "Compact Kitchen Design - Space Optimization" },
  { id: 37, type: "image", src: "/37.png", title: "Premium Bedroom", alt: "Premium Bedroom Interior Design" },
  { id: 38, type: "image", src: "/38.png", title: "Teen Room Design", alt: "Teen Room Interior Design" },
  { id: 39, type: "image", src: "/39.png", title: "Nursery Room", alt: "Nursery Room Design - Safe Spaces" },
  { id: 40, type: "image", src: "/40.png", title: "Walk-in Closet", alt: "Walk-in Closet Design - Organization" },
  { id: 41, type: "image", src: "/41.png", title: "Dressing Area", alt: "Dressing Area Interior Design" },
  { id: 42, type: "image", src: "/42.png", title: "Reading Corner", alt: "Reading Corner Design - Cozy Spaces" },
  { id: 43, type: "image", src: "/43.png", title: "Entertainment Room", alt: "Entertainment Room Interior Design" },
  { id: 44, type: "image", src: "/44.png", title: "Home Theater", alt: "Home Theater Interior Design - Media Room" },
  { id: 45, type: "image", src: "/45.png", title: "Gym Room Design", alt: "Gym Room Interior Design - Fitness Space" },
  { id: 46, type: "image", src: "/46.png", title: "Utility Room", alt: "Utility Room Design - Functional Space" },
  { id: 47, type: "image", src: "/47.png", title: "Terrace Garden", alt: "Terrace Garden Design - Outdoor Space" },
  { id: 48, type: "image", src: "/48.png", title: "Indoor Plants", alt: "Indoor Plants and Green Design" },
  { id: 49, type: "image", src: "/49.png", title: "Accent Walls", alt: "Accent Wall Design - Feature Walls" },
  { id: 50, type: "image", src: "/50.png", title: "Bookshelf Design", alt: "Bookshelf Interior Design" },
  { id: 51, type: "image", src: "/51.png", title: "Console Table", alt: "Console Table Design - Entryway" },
  { id: 52, type: "image", src: "/52.png", title: "Coffee Table Setup", alt: "Coffee Table and Living Room Setup" },
  { id: 53, type: "image", src: "/53.png", title: "Sofa Design", alt: "Sofa Design - Comfort and Style" },
  { id: 54, type: "image", src: "/54.png", title: "Bed Design", alt: "Bed Interior Design - Bedroom Focus" },
  { id: 55, type: "image", src: "/55.png", title: "Mirror Design", alt: "Mirror Design - Space Enhancement" },
  { id: 56, type: "image", src: "/56.png", title: "Art & Decor", alt: "Art and Decoration Interior Design" },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "image">("all")
  const [showAll, setShowAll] = useState(false)

  const filteredItems =
    selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.type === selectedFilter)
  
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Gallery of Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Explore our stunning collection of interior designs - from modern living rooms to luxurious bedrooms"
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-bold text-sm md:text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredItems.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              {showAll ? "Show Less" : `View All ${filteredItems.length} Photos`}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono mb-6 text-lg">
            {"Want to transform your space? Contact us today for a free consultation"}
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors inline-block"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
