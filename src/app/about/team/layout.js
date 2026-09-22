import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Meet the Team & Leadership | AI Shyp Logistics OS",
  description:
    "Meet Mohit Panwar (Founder & CTO with 10+ years at DTDC) and the core engineering squad behind AI Shyp, India's premier white-label courier platform OS.",
  path: "/about/team",
  images: ["/image.png"],
});

export default function TeamLayout({ children }) {
  return children;
}
