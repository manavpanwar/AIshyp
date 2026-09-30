import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms and Conditions | AI Shyp Logistics Software & Mobile App EULA",
  description:
    "Review the Terms and Conditions for AI Shyp multi-tenant logistics aggregator platform, 14+ carrier APIs, prepaid wallet rules, 0% commission model, and mobile app usage license.",
  path: "/terms-and-conditions",
  images: ["/AIship1.png"],
});

export default function TermsAndConditionsLayout({ children }) {
  return children;
}
