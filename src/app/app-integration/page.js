import CourierFranchiseSolutionsPage from "@/app/courier-franchise-solutions/page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "App Integration & Courier Franchise Solutions | AI Shyp",
  description:
    "Manage your courier operations with ease using Aishyp's integrated web and mobile applications for courier franchise partners.",
  path: "/app-integration",
});

export default function AppIntegrationPage() {
  return <CourierFranchiseSolutionsPage />;
}
