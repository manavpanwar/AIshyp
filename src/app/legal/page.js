import LegalPageViewer from "../../components/legal/LegalPageViewer";
import { getLegalDocumentSchema, getBreadcrumbSchema } from "../../lib/seo";

export default async function LegalPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const tab = resolvedSearchParams?.tab || "privacy";
  const validTab = ["privacy", "terms", "refund", "contact"].includes(tab) ? tab : "privacy";

  const schema = getLegalDocumentSchema({
    title: "AI Shyp Legal & Policy Center",
    description: "Official legal compliance, privacy policies, terms, and refund guidelines for AI Shyp.",
    path: "/legal",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Legal & Policies", item: "/legal" },
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
      <LegalPageViewer initialTab={validTab} />
    </>
  );
}
