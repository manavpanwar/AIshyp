import LegalPageViewer from "../../components/legal/LegalPageViewer";
import { getLegalDocumentSchema, getBreadcrumbSchema } from "../../lib/seo";

export default function TermsAndConditionsPage() {
  const schema = getLegalDocumentSchema({
    title: "AI Shyp Terms and Conditions",
    description:
      "Official Terms of Service and End-User License Agreement governing AI Shyp web portal, courier APIs, and mobile applications.",
    path: "/terms-and-conditions",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Terms & Conditions", item: "/terms-and-conditions" },
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
      <LegalPageViewer initialTab="terms" />
    </>
  );
}
