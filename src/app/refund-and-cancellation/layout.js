import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Cancellation and Refund Policy | AI Shyp Logistics & Prepaid Wallet",
  description:
    "Understand AI Shyp policies on order cancellations before pickup (100% instant refund), wallet bank withdrawals, 7-day onboarding guarantees, and lost cargo claims.",
  path: "/refund-and-cancellation",
  images: ["/AIship1.png"],
});

export default function RefundAndCancellationLayout({ children }) {
  return children;
}
