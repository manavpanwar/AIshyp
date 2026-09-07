import { buildPageMetadata } from "../../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Courier Franchise Software & Logistics OS in India | AIShyp",
  description:
    "Empower your courier franchise and regional shipping business with white-label technology, 14+ direct courier APIs, cash collection controls, sub-agent onboarding, and automated NDR workflows.",
  path: "/solutions/courier-franchise-software",
  images: ["/Franchise.png"],
});

export default function CourierFranchiseSoftwareLayout({ children }) {
  return children;
}
