import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Culture & Careers @ AI Shyp | Life, Engineering Values & Open Roles",
  description:
    "Explore life at AI Shyp. Discover our high-ownership engineering culture, core values, perks, and open career opportunities in building India's flagship logistics operating system.",
  path: "/culture",
  images: ["/aishiplogo.png"],
});

export default function CultureLayout({ children }) {
  return children;
}
