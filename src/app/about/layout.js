import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "About AI Shyp | White-Label Logistics OS & Courier Aggregator Platform",
  description:
    "What if you could build, connect, and scale your own courier platform? Learn how AI Shyp empowers logistics brands and franchises in India with 14+ courier APIs and 100% white-label technology.",
  path: "/about",
  images: ["/AIship1.png"],
});

export default function AboutLayout({ children }) {
  return children;
}
