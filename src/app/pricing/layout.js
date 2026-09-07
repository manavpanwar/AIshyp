import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "White Label Shipping Software Pricing | Starter ₹6,999 [0% Revenue Share]",
  description:
    "Transparent white-label SaaS pricing for e-commerce brands and shipping aggregators. Starter ₹6,999/mo (500 orders), Growth ₹11,999/mo (2,000 orders), and Ultimate ₹19,999/mo (Unlimited orders). Keep 100% margin spread.",
  path: "/pricing",
  images: ["/aishiplogo.png"],
});

export default function PricingLayout({ children }) {
  return children;
}