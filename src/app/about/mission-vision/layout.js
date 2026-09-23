import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Mission & Vision | AI Shyp - Empowering Independent Logistics Businesses",
  description:
    "Explore AI Shyp's mission and vision: empowering entrepreneurs, courier franchises, and shipping brands with modern courier aggregator technology, 14+ direct carrier APIs, and 100% white-label sovereignty.",
  path: "/about/mission-vision",
  images: ["/AIship1.png"],
});

export default function MissionVisionLayout({ children }) {
  return children;
}
