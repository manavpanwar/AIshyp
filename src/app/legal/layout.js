import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Legal, Trust & Policies | AI Shyp Logistics OS & Mobile App",
  description:
    "Comprehensive legal suite for AI Shyp multi-carrier shipping SaaS, web portal, APIs, and mobile application (Privacy Policy, Terms of Service, Cancellation & Refund).",
  path: "/legal",
  images: ["/AIship1.png"],
});

export default function LegalLayout({ children }) {
  return children;
}
