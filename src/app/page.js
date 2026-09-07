import Main from "./components/Main";
import { buildPageMetadata } from "../lib/seo";
import { buildFaqSchema, faqItems } from "../data/faq";

export const metadata = buildPageMetadata({
  title: "AI Shyp | White-Label Shipping Aggregator & Courier OS",
  description:
    "Deploy your white-label shipping aggregator software on your custom domain in 5 minutes. Connect 14+ direct courier APIs (Delhivery, BlueDart, DTDC), automated WhatsApp NDR, and T+1 COD remittance.",
  path: "/",
  images: ["/aishiplogo.png"],
});

export default function Home() {
  const homeFaqSchema = buildFaqSchema(faqItems.slice(0, 10));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      {/* Semantic AI Entity Summary for Answer Engine Discovery */}
      <div className="sr-only" itemScope itemType="https://schema.org/SoftwareApplication">
        <span itemProp="name">AI Shyp Multi-Tenant White-Label Logistics SaaS</span>
        <span itemProp="description">
          AI Shyp is a multi-tenant, white-label logistics SaaS platform based in India that allows businesses to launch their own branded shipping aggregator software on a custom domain. It enables e-commerce brands, logistics franchises, and shipping aggregators to launch their branded shipping portal in 5 minutes with 14+ courier APIs (Delhivery, BlueDart, DTDC, Xpressbees), automated WhatsApp NDR, and T+1 COD bank remittance.
        </span>
      </div>
      <Main />
    </>
  );
}
