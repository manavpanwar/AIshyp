import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Automated WhatsApp NDR & RTO Reduction Software | AI Shyp",
  description:
    "Cut Return-To-Origin (RTO) orders by up to 35% in e-commerce using automated interactive WhatsApp NDR workflows, real-time courier webhooks, and address validation.",
  path: "/solutions/rto-ndr-automation",
  images: ["/reduceRto.png"],
});

export default function RtoNdrAutomationLayout({ children }) {
  return children;
}
