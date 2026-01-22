import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

// Site Configuration
const siteUrl = "https://interiordesignvadodara.in";
const siteName = "Interior Design Vadodara";
const sitePhone = "+91 63535 83148";
const siteEmail = "info@interiordesignvadodara.in";

export const metadata: Metadata = {
  title: {
    default: "Best Interior Designers in Vadodara | Interior Design Vadodara",
    template: "%s | Interior Design Vadodara",
  },
  description:
    "Looking for the best interior designers in Vadodara? Interior Design Vadodara offers premium home & office interior design services. 15+ years experience, 500+ projects completed. Free 3D design consultation!",
  keywords:
    "interior designers vadodara, best interior designers vadodara, home interior design vadodara, modular kitchen vadodara, office interior design vadodara, bedroom interior vadodara, living room design vadodara, interior decorator vadodara",
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Best Interior Designers in Vadodara | Interior Design Vadodara",
    description:
      "Transform your space with Vadodara's most trusted interior designers. Home interior, modular kitchen, bedroom, living room, office interiors. Free 3D design consultation!",
    url: siteUrl,
    siteName: siteName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Interior Designers in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designers in Vadodara",
    description: "Premium home interior design, modular kitchen, bedroom, living room, office interiors in Vadodara. Free consultation!",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@idvadodara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml', rel: 'icon' },
    ],
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1e293b',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    me: 'info@interiordesignvadodara.in',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        image: `${siteUrl}/logo.png`,
        description: "Best interior designers in Vadodara offering premium home interior design, modular kitchen, bedroom, living room, office interiors. 15+ years experience, 500+ projects completed.",
        url: siteUrl,
        telephone: sitePhone,
        email: siteEmail,
        address: {
          "@type": "PostalAddress",
          streetAddress: "301, Shree Krishna Complex, Near HDFC Bank",
          addressLocality: "Alkapuri, Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390007",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "22.3072",
          longitude: "73.1812"
        },
        sameAs: [
          "https://facebook.com/interiordesignvadodara",
          "https://instagram.com/interiordesignvadodara",
          "https://linkedin.com/company/interiordesignvadodara"
        ],
        priceRange: "₹₹₹",
        openingHours: "Mo-Sa 09:00-19:00",
        serviceArea: {
          "@type": "City",
          name: "Vadodara, Gujarat, India",
        },
        areaServed: ["Vadodara", "Alkapuri", "Akota", "Gotri", "Manjalpur", "Sayajigunj", "Fatehgunj", "Karelibaug", "Subhanpura", "Race Course", "Harni", "Tandalja", "Nizampura", "Makarpura", "Sama", "Waghodia Road", "Chhani", "Old Padra Road"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "500"
        }
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        foundingDate: "2010",
        knowsAbout: [
          "Interior Design",
          "Home Interior Design",
          "Modular Kitchen Design",
          "Bedroom Interior Design",
          "Living Room Interior Design",
          "Office Interior Design",
          "Commercial Interior Design",
          "False Ceiling Design",
          "Wardrobe Design",
          "Kitchen Cabinet Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: "Best Interior Designers in Vadodara",
        publisher: {
          "@id": `${siteUrl}/#organization`
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
