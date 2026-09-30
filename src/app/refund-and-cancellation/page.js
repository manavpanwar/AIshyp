import LegalPageViewer from "../../components/legal/LegalPageViewer";
import { getLegalDocumentSchema, getBreadcrumbSchema } from "../../lib/seo";

export default function RefundAndCancellationPage() {
  const schema = getLegalDocumentSchema({
    title: "AI Shyp Cancellation and Refund Policy",
    description:
      "Transparent refund and cancellation terms for shipments, wallet balance withdrawals, SaaS plans, and carrier damage claims on AI Shyp.",
    path: "/refund-and-cancellation",
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Cancellation & Refund Policy", item: "/refund-and-cancellation" },
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
      <LegalPageViewer initialTab="refund" />
    </>
  );
}
