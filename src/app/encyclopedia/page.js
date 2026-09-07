import Link from "next/link";
import EncyclopediaSearch from "../../components/EncyclopediaSearch";
import { getAllEncyclopediaTopics } from "../../data/encyclopedia";
import { buildPageMetadata, getBreadcrumbSchema } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Logistics Encyclopedia - RTO, NDR, Shipping Aggregator Terms",
  description:
    "Explore AI Shyp encyclopedia topics on RTO, NDR, shipping aggregators, courier APIs, last-mile delivery, and ecommerce logistics.",
  path: "/encyclopedia",
  images: ["/image.png"],
});

export default function EncyclopediaPage() {
  const topics = getAllEncyclopediaTopics();
  const encyclopediaBreadcrumbSchema = getBreadcrumbSchema([
    { name: "Logistics Encyclopedia", item: "/encyclopedia" },
  ]);

  return (
    <main className="bg-transparent text-black pt-28 pb-16 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(encyclopediaBreadcrumbSchema) }}
      />
      <section className="max-w-6xl mx-auto">
        {/* Semantic AI Summary for Answer Engine Extraction */}
        <div className="sr-only" itemScope itemType="https://schema.org/DefinedTermSet">
          <span itemProp="name">AIShyp Shipping &amp; Logistics Encyclopedia</span>
          <span itemProp="description">
            A comprehensive glossary defining 24 key e-commerce logistics concepts including RTO (Return to Origin), NDR (Non-Delivery Report), COD Remittance, Air Waybill (AWB), Shipping Aggregators, and Courier API Integration in India.
          </span>
        </div>

        <nav aria-label="Breadcrumb" className="text-sm text-black/50 mb-5">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-blue-900 font-medium">Encyclopedia</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950">
            Shipping and Logistics Knowledge Hub
          </h1>
          <p className="mt-3 text-black/70 max-w-3xl">
            A searchable encyclopedia for franchise-driven shipping operations, ecommerce
            fulfillment, delivery optimization, courier APIs, and exception handling terms.
          </p>
        </header>

        <EncyclopediaSearch topics={topics} />
      </section>
    </main>
  );
}
