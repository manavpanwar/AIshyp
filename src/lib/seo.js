export const SITE_URL = "https://aishyp.com";

export const SITE_NAME = "AI Shyp";

export const DEFAULT_OG_IMAGE = "/aishiplogo.png";

export const DEFAULT_TITLE = "AI Shyp | White-Label Shipping Aggregator & Courier OS";

export const DEFAULT_DESCRIPTION =
  "AI Shyp is a multi-tenant, white-label logistics SaaS platform based in India that allows businesses to launch their own branded shipping aggregator software on a custom domain. Powers shipping aggregators, logistics franchises, and e-commerce brands with 14+ direct courier APIs, automated WhatsApp NDR, and T+1 COD remittance.";

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
    founder: {
      "@type": "Person",
      name: "Mohit Panwar",
      sameAs: "https://www.linkedin.com/in/mohitpanwar2111/",
    },
    sameAs: ["https://www.linkedin.com/in/mohitpanwar2111/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7045814007",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
        email: "support@aishyp.com",
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

// White-Label Software Platform Schema for Courier Aggregators & Logistics Franchises
export function getLogisticsServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "White-Label Shipping Software & Courier Aggregator OS Platform",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/aishiplogo.png`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "AI Shyp is a multi-tenant, white-label logistics SaaS platform based in India that allows businesses to launch their own branded shipping aggregator software on a custom domain. The software powers both B2C retail e-commerce parcel shipping and B2B heavy cargo freight operations across 29,000+ Indian pincodes with 14+ courier APIs (Delhivery, BlueDart, DTDC), automated WhatsApp NDR, and custom domain multi-tenancy.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Courier Aggregator Software Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "White-Label Shipping Aggregator Software",
            description: "Turnkey digital logistics portal on custom domain with zero vendor watermarks and 0% revenue split.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Courier Franchise & Agent Management System",
            description: "Multi-tenant sub-account management, booking counter cash collection, and localized rate cards.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automated WhatsApp NDR & RTO Recovery Engine",
            description: "Interactive WhatsApp buyer communication recovering 35% of failed doorstep deliveries for B2C orders.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Courier API Integration OS",
            description: "Unified REST API integration for B2C parcels & B2B freight (Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, DP World).",
          },
        },
      ],
    },
  };
}

// SoftwareApplication Schema (Primary AEO Schema for SaaS entity discovery)
export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Shyp",
    operatingSystem: "Cloud-Based SaaS",
    applicationCategory: "BusinessApplication / Logistics Software",
    description: "White-label courier aggregation and multi-tenant logistics software for shipping businesses in India.",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/aishiplogo.png`,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "6999",
      highPrice: "19999",
      priceCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "6999",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "6999",
            priceCurrency: "INR",
            unitText: "MONTH",
          },
          description: "Essential shipping features for emerging brands and new regional logistics partners.",
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          price: "11999",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "11999",
            priceCurrency: "INR",
            unitText: "MONTH",
          },
          description: "Complete automation stack with Shopify, WhatsApp, and API integrations for scaling aggregators.",
        },
        {
          "@type": "Offer",
          name: "Ultimate Plan",
          price: "19999",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "19999",
            priceCurrency: "INR",
            unitText: "MONTH",
          },
          description: "Enterprise operations with Cash Collection, unlimited order cap, and 100% full feature access.",
        },
      ],
    },
  };
}

// Speakable Schema for Voice Search & AI Summary Generation (GEO)
export function getSpeakableSchema(cssSelectors = ["#geo-direct-answer", ".geo-speakable"]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

// BreadcrumbList Schema Generator
export function getBreadcrumbSchema(items = []) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

// Pricing Product & OfferCatalog Schema
export function getPricingOfferCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Shyp White-Label Shipping Portal",
    description: "Deploy your white-label shipping aggregator portal on your custom domain in 5 minutes with 14+ courier APIs.",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "6999",
      highPrice: "19999",
      offerCount: 3,
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "6999",
          priceCurrency: "INR",
          url: `${SITE_URL}/pricing`,
          description: "500 orders/month cap, courier integration, unified tracking, customer rates.",
        },
        {
          "@type": "Offer",
          name: "Growth",
          price: "11999",
          priceCurrency: "INR",
          url: `${SITE_URL}/pricing`,
          description: "2,000 orders/month cap, COD remittance, auto MIS, API & Shopify integration, WhatsApp alerts.",
        },
        {
          "@type": "Offer",
          name: "Ultimate",
          price: "19999",
          priceCurrency: "INR",
          url: `${SITE_URL}/pricing`,
          description: "Unlimited orders/month, cash collection, and 100% full feature access.",
        },
      ],
    },
  };
}

// Encyclopedia DefinedTerm & DefinedTermSet Schema Generator
export function getDefinedTermSchema(topic) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: topic.title,
    description: topic.shortDefinition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "AI Shyp Logistics & E-Commerce Shipping Encyclopedia",
      url: `${SITE_URL}/encyclopedia`,
    },
    url: `${SITE_URL}/encyclopedia/${topic.slug}`,
  };
}

// Carrier Integrations ItemList Schema Generator
export function getCarrierIntegrationsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Shyp Pre-Integrated Courier Carriers & E-Commerce APIs",
    description: "14+ direct carrier APIs and storefront connectors built into the AI Shyp platform.",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Delhivery Courier API" },
      { "@type": "ListItem", position: 2, name: "BlueDart Express API" },
      { "@type": "ListItem", position: 3, name: "DTDC Express API" },
      { "@type": "ListItem", position: 4, name: "Xpressbees API" },
      { "@type": "ListItem", position: 5, name: "Shadowfax API" },
      { "@type": "ListItem", position: 6, name: "Ekart Logistics API" },
      { "@type": "ListItem", position: 7, name: "Trackon Courier API" },
      { "@type": "ListItem", position: 8, name: "Ecom Express API" },
      { "@type": "ListItem", position: 9, name: "DP World B2B Freight API" },
      { "@type": "ListItem", position: 10, name: "FedEx Express API" },
      { "@type": "ListItem", position: 11, name: "Amazon Shipping API" },
      { "@type": "ListItem", position: 12, name: "Shopify Storefront 1-Click Sync" },
      { "@type": "ListItem", position: 13, name: "WooCommerce E-Commerce Plugin" },
    ],
  };
}

// AboutPage Schema Generator
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About AI Shyp",
    url: `${SITE_URL}/about`,
    description: "Learn about AI Shyp, the white-label courier OS and shipping aggregator platform powering logistics franchises and e-commerce brands in India.",
    mainEntity: getOrganizationSchema(),
  };
}

// ContactPage Schema Generator
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact AI Shyp Platform Engineering",
    url: `${SITE_URL}/contact`,
    description: "Get in touch with AI Shyp logistics specialists for platform onboarding, custom courier API setup, and enterprise SLA inquiries.",
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7045814007",
          contactType: "customer service",
          email: "support@aishyp.com",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
  };
}
