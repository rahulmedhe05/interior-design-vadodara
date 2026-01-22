// Business Configuration with unique colors and details for each vertical

export interface BusinessConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  icon: string;
  services: string[];
  areas: string[];
}

// 40 Vadodara areas for SEO landing pages
export const vadodaraAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
  "nizampura",
  "race-course",
  "productivity-road",
  "gorwa",
  "jetalpur",
  "bill",
  "navapura",
  "dandiya-bazaar",
  "panigate",
  "raopura",
  "mandvi",
  "wadi",
  "padra",
  "karjan",
  "savli",
  "dabhoi",
  "sinor",
  "kawant",
  "naswadi",
];

export const businesses: BusinessConfig[] = [
  {
    id: "interior-designers",
    name: "Interior Designers",
    slug: "interior-designers",
    tagline: "Transform Your Space with Expert Interior Design",
    description: "Premium interior design services in Vadodara",
    colors: {
      primary: "#8B5A2B", // Warm Brown
      secondary: "#D4A574", // Light Tan
      accent: "#2C1810", // Dark Brown
      gradient: "from-amber-800 to-amber-600",
    },
    icon: "🏠",
    services: [
      "Residential Interior Design",
      "Commercial Interior Design",
      "Office Interior Design",
      "Kitchen Design",
      "Bedroom Design",
      "Living Room Design",
      "Modular Kitchen",
      "False Ceiling Design",
      "Wardrobe Design",
      "Bathroom Design",
    ],
    areas: vadodaraAreas,
  },
];

export const getBusinessBySlug = (slug: string): BusinessConfig | undefined => {
  return businesses.find((b) => b.slug === slug);
};

export const getAreaDisplayName = (area: string): string => {
  const areaNames: Record<string, string> = {
    vadodara: "Vadodara",
    alkapuri: "Alkapuri",
    akota: "Akota",
    "old-padra-road": "Old Padra Road",
    gotri: "Gotri",
    "vasna-bhayli-road": "Vasna-Bhayli Road",
    manjalpur: "Manjalpur",
    sama: "Sama",
    karelibaug: "Karelibaug",
    "waghodia-road": "Waghodia Road",
    chhani: "Chhani",
    harni: "Harni",
    kalali: "Kalali",
    atladara: "Atladara",
    "vadsar-road": "Vadsar Road",
    tarsali: "Tarsali",
    sayajigunj: "Sayajigunj",
    subhanpura: "Subhanpura",
    tandalja: "Tandalja",
    makarpura: "Makarpura",
    fatehgunj: "Fatehgunj",
    nizampura: "Nizampura",
    "race-course": "Race Course",
    "productivity-road": "Productivity Road",
    gorwa: "Gorwa",
    jetalpur: "Jetalpur",
    bill: "Bill",
    navapura: "Navapura",
    "dandiya-bazaar": "Dandiya Bazaar",
    panigate: "Panigate",
    raopura: "Raopura",
    mandvi: "Mandvi",
    wadi: "Wadi",
    padra: "Padra",
    karjan: "Karjan",
    savli: "Savli",
    dabhoi: "Dabhoi",
    sinor: "Sinor",
    kawant: "Kawant",
    naswadi: "Naswadi",
  };
  return areaNames[area] || area;
};

export const allAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
  "nizampura",
  "race-course",
  "productivity-road",
  "gorwa",
  "jetalpur",
  "bill",
  "navapura",
  "dandiya-bazaar",
  "panigate",
  "raopura",
  "mandvi",
  "wadi",
  "padra",
  "karjan",
  "savli",
  "dabhoi",
  "sinor",
  "kawant",
  "naswadi",
];
