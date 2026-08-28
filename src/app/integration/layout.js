import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "14+ Courier Partner APIs & 1-Click Shopify Integration",
  description:
    "Connect 14+ courier partner APIs (Delhivery, BlueDart, DTDC, Xpressbees, Shadowfax, DP World) and 1-click Shopify storefront sync with automated AWB tracking pushback.",
  path: "/integration",
  images: ["/shopify.jpeg"],
});

export default function IntegrationLayout({ children }) {
  return children;
}
