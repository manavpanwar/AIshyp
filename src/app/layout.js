import { Manrope, JetBrains_Mono } from "next/font/google";
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
} from "../lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | AIShyp",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "AIShyp",
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
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${manrope.className} antialiased relative min-h-screen text-slate-900 bg-white selection:bg-[#D8331F] selection:text-white`}>
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

        <AppToaster />
        <Header />
        <div className="relative z-10">{children}</div>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
