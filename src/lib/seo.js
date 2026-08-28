export const SITE_URL = "https://aishyp.com";

export const SITE_NAME = "AIShyp";

export const DEFAULT_OG_IMAGE = "/aishiplogo.png";

export const DEFAULT_TITLE = "AIShyp | White-Label Shipping Aggregator & Courier OS";

export const DEFAULT_DESCRIPTION =
  "AIShyp powers shipping aggregators, logistics franchises, and e-commerce brands with a white-label shipping portal, 14+ direct courier APIs (Delhivery, BlueDart, DTDC), automated WhatsApp NDR, and T+1 COD remittance.";

export function buildPageMetadata({
  title,
  description,
  path = "/",
  images = [DEFAULT_OG_IMAGE],
}) {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const canonical = canonicalPath === "/" ? SITE_URL : `${SITE_URL}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      images: images.map((img) => (img.startsWith("http") ? img : `${SITE_URL}${img}`)),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((img) => (img.startsWith("http") ? img : `${SITE_URL}${img}`)),
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/aishiplogo.png`,
    description: DEFAULT_DESCRIPTION,
    sameAs: ["https://www.linkedin.com/in/mohitpanwar2111/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7045814007",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/features?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// Google Sitelinks Structured Data Schema
export function getSiteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Platform Features",
        description: "Explore 10 core logistics capabilities, NDR automation, and courier allocation.",
        url: `${SITE_URL}/features`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "SaaS Pricing",
        description: "Starter ₹6,999/mo, Growth ₹11,999/mo, and Ultimate ₹19,999/mo commercial plans.",
        url: `${SITE_URL}/pricing`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "14+ Integrations",
        description: "Direct carrier APIs for Delhivery, BlueDart, DTDC, Xpressbees, and Shopify 1-click sync.",
        url: `${SITE_URL}/integration`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Logistics Blog",
        description: "In-depth guides on RTO reduction, NDR automation, and courier API benchmarking.",
        url: `${SITE_URL}/blog`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Contact & Onboarding",
        description: "Talk to platform engineering specialists to deploy your shipping portal.",
        url: `${SITE_URL}/contact`,
      },
    ],
  };
}
