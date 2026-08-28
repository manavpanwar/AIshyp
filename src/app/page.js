import Main from "./components/Main";
import { buildPageMetadata } from "../lib/seo";

export const metadata = buildPageMetadata({
  title: "AIShyp | White-Label Shipping Aggregator & Courier OS",
  description:
    "Deploy your white-label shipping aggregator software on your custom domain in 5 minutes. Connect 14+ direct courier APIs (Delhivery, BlueDart, DTDC), automated WhatsApp NDR, and T+1 COD remittance.",
  path: "/",
  images: ["/aishiplogo.png"],
});

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
