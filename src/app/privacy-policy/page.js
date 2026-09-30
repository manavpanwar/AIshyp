import LegalPageViewer from "../../components/legal/LegalPageViewer";
import { getLegalDocumentSchema, getBreadcrumbSchema } from "../../lib/seo";

export default function PrivacyPolicyPage() {
  const schema = getLegalDocumentSchema({
    title: "AI Shyp Privacy Policy",
    description:
      "Official Privacy Policy for AI Shyp web platform and mobile application covering data protection, camera and location permissions, and statutory compliance.",
    path: "/privacy-policy",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Privacy Policy", item: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LegalPageViewer initialTab="privacy" />
    </>
  );
}
