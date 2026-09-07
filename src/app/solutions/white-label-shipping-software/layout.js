import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "White Label Shipping Software & Courier Aggregator SaaS | AI Shyp",
  description:
    "Deploy your 100% white-label shipping aggregator portal on your custom domain in 5 minutes. Connect 14+ direct courier APIs (Delhivery, BlueDart, DTDC), keep 100% margin spread, automated WhatsApp NDR, and T+1 COD remittance.",
  path: "/solutions/white-label-shipping-software",
  images: ["/aishiplogo.png"],
});

export default function WhiteLabelShippingSoftwareLayout({ children }) {
  return children;
}
