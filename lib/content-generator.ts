import { BusinessConfig, getAreaDisplayName } from "./business-config";

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutContent: string;
  whyChooseUs: string[];
  detailedServices: { title: string; description: string }[];
  areaSpecificContent: string;
  faqItems: { question: string; answer: string }[];
  processSteps: { title: string; description: string }[];
}

// Interior Designers Content
export function getInteriorDesignersContent(area: string): PageContent {
  const areaName = getAreaDisplayName(area);
  
  return {
    heroTitle: `Best Interior Designers in ${areaName}, Vadodara`,
    heroSubtitle: `Transform your space with our award-winning interior design services in ${areaName}. From modern minimalist to luxurious traditional designs, we bring your vision to life.`,
    aboutContent: `Welcome to the most trusted interior design company in ${areaName}, Vadodara. With over 15 years of experience in transforming residential and commercial spaces, we have established ourselves as the leading interior designers in the region. Our team of certified interior designers combines creativity with functionality to deliver stunning interiors that reflect your personality and lifestyle.

At our interior design studio in ${areaName}, we understand that every space tells a story. Whether you're looking to renovate your existing home, design a new office space, or create a stunning commercial establishment, our expert interior designers are here to help. We take pride in our attention to detail, quality craftsmanship, and commitment to delivering projects on time and within budget.

Our interior design services in ${areaName}, Vadodara, are tailored to meet the unique needs of each client. We begin every project with a comprehensive consultation to understand your requirements, preferences, and budget. Our designers then create detailed 3D renderings and mood boards to help you visualize the final outcome before we begin execution.

We have successfully completed over 500+ residential and 200+ commercial interior design projects across ${areaName} and other areas of Vadodara. Our portfolio includes modern apartments, luxury villas, corporate offices, retail showrooms, restaurants, and healthcare facilities. Each project showcases our commitment to excellence and innovative design solutions.

Our team stays updated with the latest interior design trends and technologies. We incorporate sustainable materials, smart home integration, and space-saving solutions to create interiors that are not only beautiful but also practical and eco-friendly. From selecting the right color palettes to choosing furniture, lighting, and accessories, we handle every aspect of your interior design project.

Choosing the right interior designer in ${areaName} can be overwhelming with so many options available. What sets us apart is our personalized approach, transparent pricing, and end-to-end project management. We have a dedicated team of carpenters, electricians, painters, and craftsmen who work under our supervision to ensure the highest quality of work.`,
    
    whyChooseUs: [
      "15+ years of experience in interior design in Vadodara",
      "500+ successful residential projects completed",
      "Certified and trained interior design professionals",
      "Free consultation and 3D design visualization",
      "Transparent pricing with no hidden costs",
      "Quality materials from trusted brands",
      "On-time project completion guaranteed",
      "Post-completion support and warranty",
      "Customized designs tailored to your budget",
      "In-house execution team for quality control",
    ],
    
    detailedServices: [
      {
        title: "Residential Interior Design",
        description: `Complete home interior solutions in ${areaName} including living rooms, bedrooms, kitchens, and bathrooms. We create personalized spaces that reflect your style and enhance your daily living experience.`,
      },
      {
        title: "Modular Kitchen Design",
        description: `Premium modular kitchen designs with smart storage solutions, quality fittings, and durable materials. Our kitchens combine aesthetics with functionality for the modern ${areaName} homeowner.`,
      },
      {
        title: "Living Room Design",
        description: `Stunning living room interiors that make a lasting impression. From furniture selection to lighting design, we create welcoming spaces for your family and guests.`,
      },
      {
        title: "Bedroom Interior Design",
        description: `Peaceful and elegant bedroom designs with custom wardrobes, comfortable bedding solutions, and ambient lighting for restful nights in ${areaName}.`,
      },
      {
        title: "Office Interior Design",
        description: `Professional office interiors that boost productivity and reflect your brand identity. We design efficient workspaces for businesses of all sizes in ${areaName}.`,
      },
      {
        title: "False Ceiling Design",
        description: `Creative false ceiling designs with integrated lighting solutions. We offer gypsum, POP, wooden, and designer ceilings to enhance your space's aesthetics.`,
      },
      {
        title: "Wardrobe & Storage Solutions",
        description: `Custom wardrobe designs and intelligent storage solutions to maximize space utilization. Our modular wardrobes are durable, stylish, and functional.`,
      },
      {
        title: "Bathroom Design",
        description: `Luxurious bathroom interiors with premium fittings, tiles, and vanities. We create spa-like experiences in your home bathroom in ${areaName}.`,
      },
      {
        title: "Commercial Interior Design",
        description: `Complete interior solutions for shops, showrooms, restaurants, and commercial establishments in ${areaName}. We create spaces that attract customers and enhance business.`,
      },
    ],
    
    areaSpecificContent: `${areaName} is one of the most prestigious localities in Vadodara, known for its well-planned infrastructure and modern residential complexes. As leading interior designers in ${areaName}, we have extensive experience working with the diverse range of properties in this area, from compact apartments to spacious bungalows.

Understanding the unique architectural styles and space configurations common in ${areaName}, our designers create customized solutions that maximize space utilization while maintaining aesthetic appeal. We have worked with numerous families in ${areaName}, transforming their homes into beautiful living spaces that reflect their lifestyle and preferences.

The residents of ${areaName} appreciate quality and attention to detail, which aligns perfectly with our design philosophy. Whether you live in one of the premium societies or an independent house in ${areaName}, our interior design services are tailored to meet your specific requirements.

Our local presence in ${areaName} means faster response times, easier site visits, and better understanding of local vendors and suppliers. We have established relationships with the best material suppliers and craftsmen in ${areaName}, ensuring you get the best quality at competitive prices.

Many of our successful projects in ${areaName} have come through word-of-mouth referrals from satisfied customers. We invite you to visit our completed projects in the area to see our work firsthand and speak with our clients about their experience.`,
    
    faqItems: [
      {
        question: `What is the cost of interior design services in ${areaName}, Vadodara?`,
        answer: `The cost of interior design in ${areaName} varies based on the scope of work, materials chosen, and customization level. For a standard 2BHK apartment, complete interior design typically ranges from ₹3-8 lakhs. For 3BHK apartments, it can range from ₹5-12 lakhs. We offer free consultations and detailed quotes based on your specific requirements.`,
      },
      {
        question: `How long does it take to complete an interior design project in ${areaName}?`,
        answer: `The timeline depends on the project size and complexity. A standard 2-3 BHK apartment interior typically takes 45-60 days from design finalization to completion. Larger projects or villas may take 60-90 days. We provide a detailed project timeline during the initial consultation.`,
      },
      {
        question: `Do you provide 3D designs before starting the work?`,
        answer: `Yes, we provide detailed 3D renderings and virtual walkthroughs of your space before starting any execution work. This helps you visualize the final outcome and make informed decisions about colors, materials, and layouts.`,
      },
      {
        question: `What is included in your interior design package?`,
        answer: `Our comprehensive packages include design consultation, 3D visualization, material selection, civil work (if required), carpentry, electrical work, painting, flooring, furniture, and final styling. We handle everything from concept to completion.`,
      },
      {
        question: `Do you offer modular furniture or custom carpentry?`,
        answer: `We offer both modular and custom carpentry solutions based on your preference and budget. Modular furniture is factory-finished and faster to install, while custom carpentry allows for unique designs tailored to your space.`,
      },
      {
        question: `What warranty do you provide on interior work?`,
        answer: `We provide a 1-5 year warranty on different components of our work. Carpentry work comes with a 5-year warranty, hardware and fittings with 1-2 years, and we ensure manufacturer warranties on all branded materials and appliances.`,
      },
    ],
    
    processSteps: [
      {
        title: "Consultation",
        description: "Free consultation to understand your requirements, style preferences, and budget",
      },
      {
        title: "Design Phase",
        description: "Creating detailed 2D layouts, 3D renderings, and material selection",
      },
      {
        title: "Execution",
        description: "Professional execution by our skilled team with regular progress updates",
      },
      {
        title: "Handover",
        description: "Final inspection, quality check, and handover with complete documentation",
      },
    ],
  };
}

// Main function to get content for any business
export function getBusinessContent(business: BusinessConfig, area: string): PageContent {
  return getInteriorDesignersContent(area);
}

// Keyword-specific content generator
export function getKeywordContent(business: BusinessConfig, keyword: string, area: string): PageContent {
  const baseContent = getBusinessContent(business, area);
  const areaName = getAreaDisplayName(area);
  
  // Customize based on keyword
  const keywordTitle = keyword.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  
  return {
    ...baseContent,
    heroTitle: `${keywordTitle} in ${areaName}, Vadodara`,
    heroSubtitle: `Looking for ${keywordTitle.toLowerCase()} services in ${areaName}? Get expert solutions from Vadodara's most trusted interior design company. Free consultation available.`,
  };
}
