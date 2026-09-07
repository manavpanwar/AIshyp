import FAQ from "../../components/FAQ";
import { buildFaqSchema, faqItems } from "../../data/faq";
import { buildPageMetadata, getBreadcrumbSchema } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "FAQ - Shipping Aggregator, Courier Franchise, RTO, NDR",
  description:
    "Find answers to common questions about shipping aggregators, courier franchise business, RTO reduction, NDR automation, ecommerce logistics, and delivery optimization.",
  path: "/faq",
  images: ["/support.png"],
});

export default function FAQPage() {
  const faqSchema = buildFaqSchema(faqItems);
  const faqBreadcrumbSchema = getBreadcrumbSchema([
    { name: "Frequently Asked Questions", item: "/faq" },
  ]);

  return (
    <main className="bg-[#F4F6F9] text-slate-900 pt-32 pb-24 px-6 sm:px-12 lg:px-20 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqBreadcrumbSchema) }}
      />

      {/* Semantic AI Summary for Answer Engine Extraction */}
      <div className="sr-only" itemScope itemType="https://schema.org/FAQPage">
        <span itemProp="name">AIShyp Shipping &amp; Logistics Frequently Asked Questions</span>
        <span itemProp="description">
          Verified answers on how white-label shipping aggregator software works, courier franchise investment and margins, RTO reduction strategies, automated WhatsApp NDR recovery, multi-courier API integrations (Delhivery, BlueDart, DTDC), and T+1 COD remittances.
        </span>
      </div>

      <FAQ
        items={faqItems}
        subtitle="Search and explore full answers on shipping aggregator software, courier franchise operations, NDR automation, API integration, and delivery optimization."
        showSearch={true}
        showCategoryFilter={true}
        showCta={true}
        showExploreMore={false}
      />
    </main>
  );
}
