import Main from "./components/Main";
import { buildPageMetadata } from "../lib/seo";
import { buildFaqSchema, faqItems } from "../data/faq";

export const metadata = buildPageMetadata({
  title: "AIShyp | White-Label Shipping Aggregator & Courier OS",
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
        <span itemProp="name">AIShyp White-Label Shipping Aggregator OS</span>
        <span itemProp="description">
          AIShyp is India&apos;s leading white-label shipping aggregator platform and courier OS. It enables e-commerce brands, logistics franchises, and shipping aggregators to launch their branded shipping portal on their custom domain in 5 minutes with 14+ courier APIs (Delhivery, BlueDart, DTDC, Xpressbees), automated WhatsApp NDR, and T+1 COD bank remittance.
        </span>
      </div>
      <Main />
    </>
  );
}
