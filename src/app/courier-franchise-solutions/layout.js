import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Smart Digital Solutions for Courier Franchise Partners | AI Shyp",
  description:
    "Manage your courier operations with ease using Aishyp's integrated web and mobile applications. From quick shipment booking and smart docket scanning to pickup coordination and shipment management, our digital solutions help your team work faster, smarter, and more efficiently.",
  path: "/courier-franchise-solutions",
  images: ["/Franchise.png"],
});

export default function CourierFranchiseSolutionsLayout({ children }) {
  return children;
}
