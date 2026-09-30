import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | AI Shyp Logistics Platform & Mobile App",
  description:
    "Review the official AI Shyp Privacy Policy governing data collection, mobile app hardware permissions (camera barcode scanning, GPS, push notifications), 256-bit encryption, and DPDP Act compliance.",
  path: "/privacy-policy",
  images: ["/AIship1.png"],
});

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
