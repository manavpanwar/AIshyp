import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "AI Shyp vs Shiprocket: White-Label Shipping Software Comparison",
  description:
    "Compare AI Shyp white-label shipping portal against Shiprocket. AI Shyp gives you 100% brand ownership on your domain, 0% revenue share, 100% margin retention, and direct courier APIs.",
  path: "/vs/shiprocket",
  images: ["/aishiplogo.png"],
});

export default function ShiprocketComparisonLayout({ children }) {
  return children;
}
