import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "AIShyp vs Shiprocket: White-Label Shipping Software Comparison",
  description:
    "Compare AIShyp white-label shipping portal against Shiprocket. AIShyp gives you 100% brand ownership on your domain, 0% revenue share, 100% margin retention, and direct courier APIs.",
  path: "/vs/shiprocket",
  images: ["/aishiplogo.png"],
});

export default function ShiprocketComparisonLayout({ children }) {
  return children;
}
