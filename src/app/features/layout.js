import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Platform Features & Architecture | White-Label Shipping OS",
  description:
    "Explore 10 core logistics modules: 100% white-label custom domain portal, real-time analytics, 14+ courier API allocation, Shopify 2-way sync, automated WhatsApp NDR, T+1 COD remittance, and docket weight auditing.",
  path: "/features",
  images: ["/aishiplogo.png"],
});

export default function FeaturesLayout({ children }) {
  return children;
}
