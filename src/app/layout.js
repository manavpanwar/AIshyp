import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppToaster from "./components/AppToaster";
import WhatsappButton from "./components/WhatsappButton";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  getOrganizationSchema,
  getWebSiteSchema,
  getSiteNavigationSchema,
  getSoftwareApplicationSchema,
  getLogisticsServiceSchema,
  getSpeakableSchema,
} from "../lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | AI Shyp",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "AI Shyp",
    "shipping aggregator platform",
    "white label shipping portal",
    "Delhivery API integration",
    "BlueDart API integration",
    "DTDC API integration",
    "Shopify shipping India",
    "reduce RTO e-commerce",
    "WhatsApp NDR automation",
    "courier franchise software",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className={`${poppins.className} antialiased relative min-h-screen text-slate-900 bg-white selection:bg-[#D8331F] selection:text-white`}>
        {/* Google Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
        {/* Google Sitelinks SearchBox Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
        {/* Google Sitelinks ItemList / SiteNavigationElement Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getSiteNavigationSchema()) }}
        />
        {/* SoftwareApplication Structured Data for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getSoftwareApplicationSchema()) }}
        />
        {/* Logistics & Shipping Service Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLogisticsServiceSchema()) }}
        />
        {/* Speakable Structured Data for GEO & Voice Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getSpeakableSchema()) }}
        />

        <AppToaster />
        <Header />
        <div className="relative z-10">{children}</div>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
