import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact AIShyp Platform Engineering & Onboarding Squad",
  description:
    "Talk to platform logistics specialists to deploy your custom domain white-label shipping aggregator portal in under 24 hours. Direct phone +91 7045814007 or email mohit@vizlabs.in.",
  path: "/contact",
  images: ["/aishiplogo.png"],
});

export default function ContactLayout({ children }) {
  return children;
}
