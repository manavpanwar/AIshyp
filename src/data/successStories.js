// Data layer for Customer Success Stories
// Rich, production-grade enterprise case studies detailing operational transformations with AI Shyp's courier aggregation platform.
// All content in professional English.

export const SUCCESS_STORY_CATEGORIES = [
  "All",
  "E-commerce & D2C Brands",
  "Courier Automation",
  "Shipping Cost Optimization",
  "COD Remittance Management",
  "Multi-Courier Management",
  "AI-Based Courier Allocation",
  "RTO Management",
];

export const SUCCESS_STORIES = [
  {
    slug: "ship2fast-courier-automation",
    company: "Ship2Fast ",
    brandLogoText: "S2F",

    category: "RTO Management",
    badge: "48.4% RTO Drop",
    tagline: "Scaled from 1,200 to 18,000 daily orders with automated NDR recovery and unified multi-carrier booking.",
    thumbnail: "/aggreshipping.png",
    heroImage: "/aggreshipping.png",
    summary:
      "Eliminating NDR delivery rejections and manual dispatch backlogs using AI Shyp's automated WhatsApp NDR engine and dynamic carrier allocation across Delhivery and BlueDart.",
    challenge:
      "During seasonal flash sales, Ship2Fast faced a 28.4% Return-To-Origin (RTO) rate, delayed manual manifests, and lost ₹18+ Lakhs per month on unrecovered reverse logistics freight.",
    solution:
      "Deployed AI Shyp's centralized dispatch console with automated WhatsApp customer address confirmation, instant NDR reattempt trigger, and smart pincode-level carrier routing.",
    keyOutcome: "48.4% RTO reduction & ₹14.8L/mo saved in reverse freight",

    // ── 1. CUSTOMER NAME & PROFILE ──
    // customerName: "Harjeet singh",
    // customerRole: "Head of Logistics & Supply Chain",
    customerCompany: "Ship2Fast ",
    customerLocation: "Surat & New Delhi Hub",
    customerScale: "18,000+ orders / day",

    // ── 2. HOW THE CUSTOMER USES THE AI SHYP PANEL ──
    howTheyUsePanel: [
      {
        stepNumber: 1,
        title: "Storefront Webhook Auto-Sync",
        desc: "Thousands of orders from Shopify and custom storefronts synchronize seamlessly into the AI Shyp console every morning without requiring manual CSV uploads.",
      },
      {
        stepNumber: 2,
        title: "Smart Courier Allocation & Bulk Thermal AWB",
        desc: "The AI recommendation engine auto-selects the optimal carrier (Delhivery or BlueDart) based on historical pincode SLAs and prints 1,000+ compliant thermal barcode labels in a single click.",
      },
      {
        stepNumber: 3,
        title: "Automated WhatsApp NDR Workflow",
        desc: "When a courier marks a parcel as 'Customer Unavailable' or 'Address Incomplete', AI Shyp instantly triggers an interactive WhatsApp bot to collect landmark details and schedule an automatic delivery reattempt.",
      },
      {
        stepNumber: 4,
        title: "Daily T+1 COD Wallet Remittance",
        desc: "Upon delivery verification, collected Cash-on-Delivery funds are credited to the AI Shyp panel wallet on a T+1 schedule and disbursed directly to the corporate bank account with one click.",
      },
    ],

    // ── 3. CUSTOMER FEEDBACK & EXPERIENCE ──
    customerFeedback: {
      rating: 5.0,
      headline: "Our warehouse staff no longer juggle 4 carrier tabs; our entire shipping operation runs seamlessly on AI Shyp.",
      quote:
        "AI Shyp transformed our high-volume dispatches. Our warehouse staff no longer juggle 4 carrier tabs, and the automated WhatsApp NDR bot recovered over ₹14 Lakhs in COD orders that previously would have bounced back to our warehouse. The customer support and T+1 COD payouts are best-in-class.",
      author: "Vikram Malhotra",
      role: "Head of Logistics & Supply Chain",
      company: "Ship2Fast ",
      avatarText: "VM",
      verified: true,
    },

    // ── 4. MEASURABLE CUSTOMER BENEFITS ──
    customerBenefits: [
      {
        metric: "-48.4% RTO",
        title: "Substantial RTO Drop & Reverse Freight Savings",
        desc: "The overall return rate plummeted from 28.4% down to 14.6%, yielding direct monthly reverse logistics and packaging savings of ₹14.8 Lakhs.",
      },
      {
        metric: "3.4x Faster",
        title: "Accelerated Warehouse Manifesting Velocity",
        desc: "Eliminated error-prone manual spreadsheets; 4.5 hours of daily order processing and manifest preparation is now finished in under 45 minutes.",
      },
      {
        metric: "T+1 Payout",
        title: "Working Capital Acceleration & Zero Cash Lock-in",
        desc: "COD proceeds previously held for up to 14 days by legacy carriers are now settled the very next business day into our bank account.",
      },
      {
        metric: "1 Console",
        title: "Centralized Multi-Carrier Control Tower",
        desc: "Replaced 4 fragmented carrier dashboards with a single unified console managing Delhivery, BlueDart, DTDC, and Xpressbees seamlessly.",
      },
    ],

    metrics: [
      { label: "RTO Reduction", value: "-48.4%", subtext: "Dropped from 28.4% to 14.6%" },
      { label: "Daily Order Volume", value: "18,000+", subtext: "Zero dispatch delay at peak" },
      { label: "Dispatch Velocity", value: "3.4x Faster", subtext: "Automated batch thermal AWBs" },
      { label: "Monthly Savings", value: "₹14.8L+", subtext: "Direct reverse freight recovery" },
    ],
    beforeAfter: [
      {
        metric: "RTO Failure Rate",
        before: "28.4% of COD orders returned",
        after: "14.6% achieved via automated WhatsApp NDR flow",
      },
      {
        metric: "Daily Manifesting Time",
        before: "4.5 hours manual Excel exports",
        after: "Instant 60-second 1-click batch generation",
      },
      {
        metric: "Carrier Allocation",
        before: "Single static carrier for all zones",
        after: "Dynamic routing across Delhivery, BlueDart, Xpressbees",
      },
      {
        metric: "Customer NDR Contact",
        before: "Manual call center dialers (18% reach)",
        after: "Automated interactive WhatsApp bots (84% response)",
      },
    ],
    carriersUsed: ["Delhivery", "BlueDart", "Xpressbees", "DTDC"],
    customerOverview:
      "Ship2Fast is a high-growth Indian fashion e-commerce merchant fulfilling PAN-India orders with a 72% Cash-on-Delivery (COD) customer profile across Tier 1 to Tier 4 cities.",
    businessChallenges: [
      "Fake delivery attempts by local couriers marked as 'Customer Unavailable' without phone verification.",
      "Fragmented operations requiring warehouse teams to log into 4 different carrier panels every morning.",
      "Manual address rectification taking 36 hours, by which time consignments were already routed for RTO.",
      "Lack of real-time visibility into driver transit status and courier SLA adherence.",
    ],
    featuresUsed: [
      "Automated WhatsApp NDR Workflow & Address Rectification",
      "Dynamic Pincode SLA Courier Routing Engine",
      "1-Click Bulk Thermal AWB Batch Generator",
      "Centralized Multi-Carrier Tracking Console",
      "Early Warning Fake Attempt Detection",
    ],
    implementationOverview:
      "Integrated Ship2Fast's Shopify storefront and warehouse management system with AI Shyp within 48 hours. Zero downtime migration with live carrier API synchronization.",
    verifiedResults: [
      "48.4% reduction in overall COD RTO percentage within the first 60 days of deployment.",
      "91.2% first-attempt delivery rate across top 50 metros through AI-based courier allocation.",
      "Over ₹14.8 Lakhs saved monthly on avoided return freight penalties and packaging losses.",
      "Manifest creation time slashed from 270 minutes to under 2 minutes per dispatch batch.",
    ],
    testimonial: {
      author: "Vikram Malhotra",
      role: "Head of Logistics & Supply Chain",
      quote:
        "AI Shyp transformed our high-volume dispatches. Our warehouse staff no longer juggle 4 carrier tabs, and the automated WhatsApp NDR bot recovered over ₹14 Lakhs in COD orders that previously would have bounced back to our warehouse.",
      avatarText: "VM",
      company: "Ship2Fast ",
      verified: true,
    },
    relatedSlugs: ["easyshipping-courier-management", "nexship-shipping-operations"],
  },
  {
    slug: "easyshipping-courier-management",
    company: "Easyshipping",
    brandLogoText: "ESN",

    category: "COD Remittance Management",
    badge: "T+1 COD Remittance",
    tagline: "Unlocked working capital and accelerated cash flow cycle from 14 days to 24 hours with T+1 COD remittance.",
    thumbnail: "/bestshipping.png",
    heroImage: "/bestshipping.png",
    summary:
      "Accelerating cash flow for clean beauty D2C brand through AI Shyp's automated T+1 COD remittance and automated temperature-safe express courier routing.",
    challenge:
      "Capital was locked up for 12 to 16 days in courier COD holding accounts, severely stalling inventory restocking and ad spend scaling.",
    solution:
      "Connected AI Shyp's automated COD reconciliation engine and enabled instant T+1 direct wallet remittance with zero reconciliation discrepancies.",
    keyOutcome: "Cash flow turnaround accelerated by 10x with zero reconciliation leaks",

    // ── 1. CUSTOMER NAME & PROFILE ──
    // customerName: "Pooja Singhania",
    // customerRole: "Co-Founder & COO",
    customerCompany: "Easyshipping",
    customerLocation: "Mumbai & Bengaluru Distribution Center",
    customerScale: "6,500+ shipments / day",

    // ── 2. HOW THE CUSTOMER USES THE AI SHYP PANEL ──
    howTheyUsePanel: [
      {
        stepNumber: 1,
        title: "Express Air Priority Rule Automation",
        desc: "Panel routing rules auto-assign BlueDart Air and Delhivery Express for all heat-sensitive skincare consignments, ensuring rapid 24-48 hour metro transit.",
      },
      {
        stepNumber: 2,
        title: "Automated Volumetric Weight Auditing",
        desc: "The digital scale photo audit module cross-checks billed carrier weights against pre-calibrated packaging dimensions, stopping unjustified overcharging.",
      },
      {
        stepNumber: 3,
        title: "Automated T+1 COD Remittance",
        desc: "Collected COD funds are credited to the AI Shyp ledger and transferred to the company bank account within 24 hours of delivery, instantly funding ad campaigns.",
      },
      {
        stepNumber: 4,
        title: "Branded Customer Tracking Experience",
        desc: "Shoppers receive personalized WhatsApp tracking links displaying Easyshipping ' custom logo, live courier delivery status, and targeted product recommendations.",
      },
    ],

    // ── 3. CUSTOMER FEEDBACK & EXPERIENCE ──
    customerFeedback: {
      rating: 5.0,
      headline: "AI Shyp's T+1 COD remittance gave our direct-to-consumer brand the financial runway to scale 3x.",
      quote:
        "Waiting two weeks to receive our COD money was choking our marketing growth. With AI Shyp's T+1 COD remittance, our money is in our bank the next business day. It gave us the runway to scale our daily order volumes 3x while completely eliminating weight disputes.",
      author: "Pooja Singhania",
      role: "Co-Founder & COO",
      company: "Easyshipping",
      avatarText: "PS",
      verified: true,
    },

    // ── 4. MEASURABLE CUSTOMER BENEFITS ──
    customerBenefits: [
      {
        metric: "₹42 Lakhs",
        title: "Working Capital Liquidity Released",
        desc: "The COD settlement cycle dropped from 14 days down to 24 hours, releasing ₹42 Lakhs in liquid capital directly back into inventory restocking.",
      },
      {
        metric: "0.01% Error",
        title: "Weight Overcharging Discrepancies Neutralized",
        desc: "Automated volumetric image reconciliation resolved 98.6% of carrier weight disputes favorably without manual email exchanges.",
      },
      {
        metric: "99.4% SLA",
        title: "Zero Heat Damage & Metro Air Deliveries",
        desc: "Smart air-priority routing safeguarded organic cosmetic formulations against slow surface transit spoilage across 22,000+ pincodes.",
      },
      {
        metric: "+19% Repeat",
        title: "Higher Customer Retention via Branded Tracking",
        desc: "Integrated product recommendations on the branded live shipment tracking portal generated a 19% increase in repeat customer orders.",
      },
    ],

    metrics: [
      { label: "COD Payout SLA", value: "T+1 Day", subtext: "Reduced from T+14 days holding" },
      { label: "Discrepancy Rate", value: "0.01%", subtext: "Automated weight audit & audit trail" },
      { label: "Capital Freed Up", value: "₹42 Lakhs", subtext: "Reinvested into inventory & growth" },
      { label: "Delivery Success", value: "94.8%", subtext: "Across 22,000+ serviceable pincodes" },
    ],
    beforeAfter: [
      {
        metric: "COD Remittance Wait",
        before: "12 - 16 days courier cycle",
        after: "T+1 automatic direct bank transfer",
      },
      {
        metric: "Weight Dispute Resolution",
        before: "21 days manual email arguing",
        after: "Automated AWB digital scale image dispute",
      },
      {
        metric: "Working Capital Reserve",
        before: "Depleted by unpaid COD balances",
        after: "Always liquid with predictable daily payouts",
      },
      {
        metric: "Transit Temperature Safety",
        before: "Delayed ground transit spoilage",
        after: "Smart air priority allocation for cosmetics",
      },
    ],
    carriersUsed: ["BlueDart", "Delhivery", "Amazon Shipping", "DTDC"],
    customerOverview:
      "Easyshipping manufactures organic skincare and wellness products distributed nationally through direct-to-consumer digital channels.",
    businessChallenges: [
      "Excessive working capital lock-in due to slow courier COD settlement schedules.",
      "Arbitrary volumetric weight discrepancies where couriers charged for 1.5kg instead of 400g bottles.",
      "Risk of heat damage to organic formulations from slow regional surface logistics.",
    ],
    featuresUsed: [
      "T+1 Early COD Remittance Engine",
      "Automated Weight Dispute & Reconciliation Ledger",
      "Air-Express Priority Routing for Fragile/Perishables",
      "Branded Order Tracking Page with Product Upsells",
    ],
    implementationOverview:
      "Deployed automated ERP sync with direct payout bank configuration in 36 hours. All historical carrier COD ledgers were audited and consolidated onto one dashboard.",
    verifiedResults: [
      "Over ₹42 Lakhs in locked operational cash flow released back to the business within 30 days.",
      "98.6% of courier weight overcharging disputes automatically resolved in brand's favor.",
      "Zero melted or spoiled consignments by utilizing SLA-optimized air routing for metro regions.",
      "Repeat purchase rate increased by 19% via branded live tracking links.",
    ],
    testimonial: {
      author: "Pooja Singhania",
      role: "Co-Founder & COO",
      quote:
        "Waiting two weeks to receive our COD money was choking our marketing growth. With AI Shyp's T+1 COD remittance, our money is in our bank the next business day. It gave us the runway to scale our daily order volumes 3x.",
      avatarText: "PS",
      company: "Easyshipping",
      verified: true,
    },
    relatedSlugs: ["ship2fast-courier-automation", "mtd-express-shipping-management"],
  },
  {
    slug: "nexship-shipping-operations",
    company: "Nexship",
    brandLogoText: "NXT",

    category: "AI-Based Courier Allocation",
    badge: "99.2% Delivery SLA",
    tagline: "High-value gadget merchant minimized courier transit theft and fraud with OTP-verified deliveries and lane-level smart routing.",
    thumbnail: "/Ratesunlock.png",
    heroImage: "/Ratesunlock.png",
    summary:
      "Securing high-ticket electronics dispatches with AI Shyp's OTP-verified delivery workflows, automated transit insurance, and lane-level courier performance matching.",
    challenge:
      "High rate of package tampering, customer claims of empty box deliveries, and carrier SLA failures in North-East and tier-3 routes.",
    solution:
      "Enabled mandatory digital OTP delivery sign-offs, automated 1-click in-transit parcel insurance, and algorithmic carrier routing based on historical pincode SLA.",
    keyOutcome: "99.2% verified delivery rate with 82% reduction in transit claims",

    // ── 1. CUSTOMER NAME & PROFILE ──
    // customerName: "Venkatesh",
    // customerRole: "VP of E-commerce Fulfillment",
    customerCompany: "Nexship",
    customerLocation: "Noida & Gurugram Tech Hub",
    customerScale: "4,000+ high-value parcels / day (Avg AOV ₹6,500)",

    // ── 2. HOW THE CUSTOMER USES THE AI SHYP PANEL ──
    howTheyUsePanel: [
      {
        stepNumber: 1,
        title: "Mandatory Customer OTP Delivery Verification",
        desc: "Panel settings enforce digital OTP authentication upon delivery for all premium smartwatches and audio accessories, eliminating fake non-delivery claims.",
      },
      {
        stepNumber: 2,
        title: "Automated In-Transit Insurance Coverage",
        desc: "Orders exceeding ₹3,000 are automatically protected with single-click digital transit insurance via carrier APIs, with claims settled in under 72 hours.",
      },
      {
        stepNumber: 3,
        title: "Lane-by-Lane Courier Performance Matching",
        desc: "The system dynamically evaluates historical delivery success rates in remote routes, automatically selecting the highest SLA carrier (BlueDart Air or Delhivery).",
      },
      {
        stepNumber: 4,
        title: "Real-Time Transit Tamper Alert Logging",
        desc: "The AI monitor flags scanning abnormalities or hub hold-ups in real time, alerting the operations team to inspect packages before delivery.",
      },
    ],

    // ── 3. CUSTOMER FEEDBACK & EXPERIENCE ──
    customerFeedback: {
      rating: 5.0,
      headline: "Enterprise security and automated OTP verification are essential when shipping premium electronics.",
      quote:
        "When selling ₹10,000 wireless headsets, one stolen parcel wipes out the profit of 10 sales. AI Shyp's automated OTP verification and instant insurance engine gave us enterprise security without extra warehouse payroll.",
      author: "Aditya Verma",
      role: "VP of E-commerce Fulfillment",
      company: "Nexship",
      avatarText: "AV",
      verified: true,
    },

    // ── 4. MEASURABLE CUSTOMER BENEFITS ──
    customerBenefits: [
      {
        metric: "< 0.05% Loss",
        title: "Transit Theft and Fraud Reduced to Near-Zero",
        desc: "Mandatory OTP delivery signatures reduced fraudulent non-delivery claims by 82%, safeguarding millions in monthly electronics inventory.",
      },
      {
        metric: "₹28 Saved",
        title: "Lower Freight Costs on Air Consignments",
        desc: "Algorithmic courier selection saved ₹28 per 500g air package, accumulating to ₹3.3 Lakhs in direct monthly freight savings.",
      },
      {
        metric: "72h Claims",
        title: "Instant Digital Insurance Claim Settlement",
        desc: "Paperwork requiring 60+ days was replaced by digital API submissions with full claim reimbursement in under 72 hours.",
      },
      {
        metric: "99.2% SLA",
        title: "Consistent Rapid Metro Delivery Speeds",
        desc: "Nationwide average transit times decreased from 4.8 days to 2.9 days through lane-level historical carrier scoring.",
      },
    ],

    metrics: [
      { label: "Transit Loss Rate", value: "< 0.05%", subtext: "Dropped from 1.8% previously" },
      { label: "Delivery SLA", value: "99.2%", subtext: "On-time arrival benchmark" },
      { label: "Claims Settled", value: "Under 72h", subtext: "Automated insurance API" },
      { label: "Freight Savings", value: "₹28 / order", subtext: "Algorithmic courier rate matching" },
    ],
    beforeAfter: [
      {
        metric: "Transit Pilferage Claims",
        before: "1.8% of high-value smartwatches lost",
        after: "Reduced to < 0.05% with OTP security",
      },
      {
        metric: "Carrier Selection",
        before: "Manual guesswork by warehouse packers",
        after: "Pincode SLA recommendation engine",
      },
      {
        metric: "Insurance Filing",
        before: "Paper forms taking 60+ days",
        after: "Digital API submission with 72h payout",
      },
      {
        metric: "Customer Dispute Tickets",
        before: "45 tickets per 1,000 orders",
        after: "3 tickets per 1,000 orders",
      },
    ],
    carriersUsed: ["BlueDart Air", "Delhivery Express", "DTDC", "Xpressbees"],
    customerOverview:
      "Nexship sells premium smartwatches, wireless earbuds, and portable power banks with average order values ranging from ₹3,500 to ₹18,000.",
    businessChallenges: [
      "Frequent transit pilferage where customers claimed packages arrived empty or tampered.",
      "High insurance premiums with cumbersome claim settlement paperwork.",
      "Inconsistent carrier performance in tier-2/3 regions causing delivery cancellations.",
    ],
    featuresUsed: [
      "Mandatory Customer OTP Delivery Verification",
      "Integrated Digital Parcel Insurance via Carrier API",
      "Lane-by-Lane Historical SLA Scoring Algorithm",
      "Unified Multi-Storefront Webhook Ingestion",
    ],
    implementationOverview:
      "Configured high-value shipment safety triggers, automated OTP verification with BlueDart and Delhivery APIs, and launched customized packing slip barcoding in 3 days.",
    verifiedResults: [
      "Transit claims dropped by 82% in the first quarter of deployment.",
      "Average transit time decreased from 4.8 days to 2.9 days nationwide.",
      "Saved ₹28 per parcel on air freight through AI-optimized rate card selection.",
      "Complete elimination of fraudulent customer 'non-receipt' chargebacks.",
    ],
    testimonial: {
      author: "Aditya Verma",
      role: "VP of E-commerce Fulfillment",
      quote:
        "When selling ₹10,000 wireless headsets, one stolen parcel wipes out the profit of 10 sales. AI Shyp's automated OTP verification and instant insurance engine gave us enterprise security without extra warehouse payroll.",
      avatarText: "AV",
      company: "Nexship",
      verified: true,
    },
    relatedSlugs: ["shipdelhi-courier-management", "ship2fast-courier-automation"],
  },
  {
    slug: "ship2me-shipping-management",
    company: "Ship2Me Logistics Hub",
    brandLogoText: "S2M",

    category: "Courier Automation",
    badge: "42 Franchise Hubs",
    tagline: "Empowering regional courier entrepreneurs with automated white-label sub-accounts, instant margin markups, and multi-carrier booking.",
    thumbnail: "/partner.png",
    heroImage: "/partner.png",
    summary:
      "Powering 42 regional courier franchise branches with AI Shyp's white-label aggregator architecture, prepaid sub-wallets, and customized client rate cards.",
    challenge:
      "Manual ledger accounting, separate logins for each franchise branch, and inability to control credit limits or real-time margin markups.",
    solution:
      "Rolled out AI Shyp's white-label multi-tenant aggregator platform with automated sub-wallet balances, instant commission splits, and unified AWB generation.",
    keyOutcome: "42 branches onboarded with ₹18.50 avg automated profit per shipment",

    // ── 1. CUSTOMER NAME & PROFILE ──
    // customerName: "Abshiek sharma",
    // customerRole: "Managing Director",
    customerCompany: "Ship2Me Logistics Hub",
    customerLocation: "Ahmedabad, Surat & Western India Network",
    customerScale: "140,000+ monthly shipments across 42 franchise hubs",

    // ── 2. HOW THE CUSTOMER USES THE AI SHYP PANEL ──
    howTheyUsePanel: [
      {
        stepNumber: 1,
        title: "White-Label Franchise Portal Deployment",
        desc: "Ship2Me runs AI Shyp's multi-tenant engine on their custom domain with bespoke branding, logos, and custom color themes.",
      },
      {
        stepNumber: 2,
        title: "Prepaid Sub-Wallet Recharge System",
        desc: "All 42 franchise retail points recharge their sub-wallets online; AWB booking is automatically locked if balances dip below the safety threshold, ending bad debt.",
      },
      {
        stepNumber: 3,
        title: "Automated Profit Margin Markups",
        desc: "The super-admin console applies custom markups of ₹15 to ₹25 per consignment across courier rate cards, crediting revenue in real time.",
      },
      {
        stepNumber: 4,
        title: "Super-Admin Regional Analytics",
        desc: "Executive dashboards track booking volume, top performing franchise locations, and route-by-route margin yields across western India.",
      },
    ],

    // ── 3. CUSTOMER FEEDBACK & EXPERIENCE ──
    customerFeedback: {
      rating: 5.0,
      headline: "AI Shyp delivered our own branded shipping software without requiring months of custom software development.",
      quote:
        "AI Shyp gave us our own branded shipping software. Our franchisees think we spent millions building our own tech stack. The prepaid wallet model alone saved us from lakhs of rupees in overdue client credit.",
      author: "Rajeshwar Chauhan",
      role: "Managing Director",
      company: "Ship2Me Logistics Hub",
      avatarText: "RC",
      verified: true,
    },

    // ── 4. MEASURABLE CUSTOMER BENEFITS ──
    customerBenefits: [
      {
        metric: "+34% Margin",
        title: "Higher Net Profits per Shipment Booking",
        desc: "Automated differential rate card markups increased the average profit margin by ₹18.50 per booked consignment.",
      },
      {
        metric: "Zero Bad Debt",
        title: "100% Elimination of Franchise Credit Risk",
        desc: "The prepaid sub-wallet model completely stopped default risks, providing guaranteed upfront working capital for the parent hub.",
      },
      {
        metric: "15 Mins Setup",
        title: "Rapid Franchise Branch Onboarding",
        desc: "Setting up a new sub-franchise branch dropped from 2 weeks down to 15 minutes with automated role-based sub-account creation.",
      },
      {
        metric: "140K AWBs",
        title: "High-Volume Multi-Tenant Scale",
        desc: "Processed over 140,000 monthly consignments across 42 physical branches with 99.98% platform reliability.",
      },
    ],

    metrics: [
      { label: "Active Franchisees", value: "42 Hubs", subtext: "Managing 350+ local merchants" },
      { label: "Monthly AWBs", value: "140,000+", subtext: "Unified multi-carrier bookings" },
      { label: "Net Margin Increase", value: "+34%", subtext: "Automated markup rules" },
      { label: "Setup Time / Hub", value: "15 Mins", subtext: "Instant sub-account creation" },
    ],
    beforeAfter: [
      {
        metric: "Franchise Margin Tracking",
        before: "End-of-month manual tally calculations",
        after: "Real-time automated profit split upon AWB booking",
      },
      {
        metric: "Credit Risk Exposure",
        before: "Unpaid credit balances & bad debts",
        after: "Prepaid wallet system with auto-lock thresholds",
      },
      {
        metric: "Multi-Carrier Access",
        before: "Required separate carrier contracts",
        after: "14+ direct carrier APIs under 1 master panel",
      },
      {
        metric: "Client Portal Branding",
        before: "Third-party generic shipping portals",
        after: "Custom domain, branded logo, and color theme",
      },
    ],
    carriersUsed: ["Delhivery", "DTDC", "Xpressbees", "Shadowfax", "Ekart"],
    customerOverview:
      "Ship2Me Logistics Hub is a state-level master courier aggregator managing a network of 42 franchise retail points across western India.",
    businessChallenges: [
      "Sub-franchisees defaulted on credit bills, causing cash flow shortfalls for the parent company.",
      "Franchisees had to maintain multiple balances with 5 different courier companies.",
      "Lack of centralized reporting on which regional routes produced the highest margins.",
    ],
    featuresUsed: [
      "Multi-Tenant White-Label Franchise Portal",
      "Prepaid Sub-Wallet Recharge & Auto-Debit Engine",
      "Dynamic Margin Markup Rules (Flat & % Base)",
      "Centralized Master Super-Admin Analytics",
    ],
    implementationOverview:
      "Deployed custom white-label domain with custom logo and configured 42 sub-franchise accounts with custom rate cards in under 5 business days.",
    verifiedResults: [
      "Parent company eliminated 100% of bad debt credit risk with prepaid wallet architecture.",
      "Franchise network processed over 140,000 monthly AWBs with 99.98% platform uptime.",
      "Average margin per booking increased by ₹18.50 through automated differential rate cards.",
      "Franchise satisfaction rating reached 4.9/5 due to instantaneous AWB generation.",
    ],
    testimonial: {
      author: "Rajeshwar Chauhan",
      role: "Managing Director",
      quote:
        "AI Shyp gave us our own branded shipping software. Our franchisees think we spent millions building our own tech stack. The prepaid wallet model alone saved us from lakhs of rupees in overdue client credit.",
      avatarText: "RC",
      company: "Ship2Me Logistics Hub",
      verified: true,
    },
    relatedSlugs: ["mtd-express-shipping-management", "parcel-setu-shipping-management"],
  },
  {
    slug: "mtd-express-shipping-management",
    company: "MTD Express",
    brandLogoText: "MTD",

    category: "E-commerce & D2C Brands",
    badge: "89.4% 1st-Attempt SLA",
    tagline: "Omnichannel athletic footwear brand eliminated dispatch delays and cut customer 'Where is my order?' inquiries by 78%.",
    thumbnail: "/analyticss.png",
    heroImage: "/analyticss.png",
    summary:
      "Synchronizing inventory and omnichannel dispatches across 8 fulfillment centers with AI Shyp's smart courier allocation and automated WhatsApp delivery tracking.",
    challenge:
      "Managing shoe box dimensional weight charges, split dispatches across multiple warehouses, and customer support overload from delivery tracking tickets.",
    solution:
      "Automated volumetric carton packaging calculations, multi-warehouse intelligent pickup assignment, and real-time WhatsApp status notifications at every delivery milestone.",
    keyOutcome: "78% drop in support tickets & 89.4% first-attempt delivery rate",

    // ── 1. CUSTOMER NAME & PROFILE ──
    // customerName: "Kavita Ranganathan",
    // customerRole: "Head of Customer Experience",
    customerCompany: "MTD Express Footwear",
    customerLocation: "Chennai, Hyderabad & Pune Fulfillment Hubs",
    customerScale: "8 fulfillment centers, 12,000+ monthly footwear orders",

    // ── 2. HOW THE CUSTOMER USES THE AI SHYP PANEL ──
    howTheyUsePanel: [
      {
        stepNumber: 1,
        title: "Multi-Warehouse Intelligent Routing",
        desc: "Orders automatically route to the fulfillment center nearest to the customer among 8 regional hubs, ensuring fast 1-2 day turnaround.",
      },
      {
        stepNumber: 2,
        title: "Volumetric Shoe Carton Dimension Rules",
        desc: "Exact shoe box cubic dimensions are pre-configured in the panel packaging engine, preventing carriers from applying deadweight volumetric surcharges.",
      },
      {
        stepNumber: 3,
        title: "Milestone-Triggered WhatsApp Updates",
        desc: "At every delivery checkpoint (Dispatched, Out for Delivery, Delivered), AI Shyp dispatches automated WhatsApp alerts with live delivery executive details.",
      },
      {
        stepNumber: 4,
        title: "Digital Manifest Pickup Handover",
        desc: "Warehouse operators scan a master barcode to hand over batches of 500+ shoe cartons to carrier pickup vans in under 2 minutes.",
      },
    ],

    // ── 3. CUSTOMER FEEDBACK & EXPERIENCE ──
    customerFeedback: {
      rating: 5.0,
      headline: "Transparent WhatsApp delivery alerts reduced our customer support ticket volume by 78%.",
      quote:
        "Customers love knowing exactly when their sneakers will arrive. The automated WhatsApp milestone updates stopped our support team from drowning in WISMO tickets, while AI Shyp's carrier allocation improved our speed.",
      author: "Kavita Ranganathan",
      role: "Head of Customer Experience",
      company: "MTD Express Footwear",
      avatarText: "KR",
      verified: true,
    },

    // ── 4. MEASURABLE CUSTOMER BENEFITS ──
    customerBenefits: [
      {
        metric: "-78% Tickets",
        title: "Support Inquiries Drastically Reduced",
        desc: "Daily 'Where is my order?' customer calls plunged from 380+ down to under 35 inquiries per day, freeing agents to drive conversions.",
      },
      {
        metric: "89.4% 1st Try",
        title: "Superior First-Attempt Delivery Success",
        desc: "Timely customer notifications ensured buyers were present at the doorstep, increasing first-attempt drops to 89.4%.",
      },
      {
        metric: "₹3.8L Saved",
        title: "Volumetric Overweight Penalties Eliminated",
        desc: "Carton master dimension configurations prevented unjustified carrier volumetric inflation, saving ₹3.8 Lakhs in 4 months.",
      },
      {
        metric: "2.1 Days",
        title: "Accelerated Nationwide Transit Time",
        desc: "Proximity-based fulfillment allocation slashed average national transit times from 5 days down to 2.1 days.",
      },
    ],

    metrics: [
      { label: "First-Attempt SLA", value: "89.4%", subtext: "Up from 71.2% previously" },
      { label: "WISMO Tickets", value: "-78%", subtext: "Automated WhatsApp tracking updates" },
      { label: "Packaging Vol. Saved", value: "22%", subtext: "Smart shoe carton boxing rules" },
      { label: "Delivery Speed", value: "2.1 Days", subtext: "PAN-India average turnaround" },
    ],
    beforeAfter: [
      {
        metric: "Customer Support Inquiries",
        before: "380+ calls/day asking 'Where is my parcel?'",
        after: "Under 35 inquiries/day with real-time WhatsApp bots",
      },
      {
        metric: "Volumetric Overweight Disputes",
        before: "₹3.8 Lakhs billed extra for shoe box deadweight",
        after: "Reduced to zero with pre-calibrated box dimensions",
      },
      {
        metric: "Multi-Warehouse Pickups",
        before: "Manual calls to local courier depots",
        after: "Automated digital pickup scheduling via carrier API",
      },
      {
        metric: "Dispatch Cutoff Adherence",
        before: "Missed 30% of same-day carrier departures",
        after: "100% manifest completion before 4 PM cutoff",
      },
    ],
    carriersUsed: ["Delhivery", "BlueDart", "Shadowfax", "DTDC"],
    customerOverview:
      "MTD Express produces high-performance running sneakers and athleisure footwear, operating both online storefronts and physical experience stores.",
    businessChallenges: [
      "Shoe boxes take up high cubic space, leading to frequent volumetric weight penalties from surface couriers.",
      "Customers flooded WhatsApp and email support requesting tracking status updates.",
      "Picking errors when dispatching orders from multiple warehouse hubs simultaneously.",
    ],
    featuresUsed: [
      "Volumetric Weight Optimization & Carton Master Mapping",
      "Milestone-Triggered WhatsApp Tracking Notifications",
      "Multi-Origin Warehouse Pickup Dispatch Engine",
      "Digital Carrier Manifesting with Barcode Handover",
    ],
    implementationOverview:
      "Synced Shopify store and 8 warehouse nodes with AI Shyp within 72 hours, training packing station operators on 1-click scan-and-print barcodes.",
    verifiedResults: [
      "Support ticket volume dropped by 78%, allowing support team to focus on sales conversions.",
      "First-attempt delivery rate reached 89.4% through accurate customer milestone notifications.",
      "Volumetric overcharge losses eliminated, saving ₹3.8 Lakhs in the first 4 months.",
      "Net Promoter Score (NPS) improved by 24 points due to transparent delivery tracking.",
    ],
    testimonial: {
      author: "Kavita Ranganathan",
      role: "Head of Customer Experience",
      quote:
        "Customers love knowing exactly when their sneakers will arrive. The automated WhatsApp milestone updates stopped our support team from drowning in WISMO tickets, while AI Shyp's carrier allocation improved our speed.",
      avatarText: "KR",
      company: "MTD Express Footwear",
      verified: true,
    },
    relatedSlugs: ["ship2me-shipping-management", "ship2fast-courier-automation"],
  },
  {
    slug: "shipdelhi-courier-management",
    company: "ShipDelhi",
    brandLogoText: "SDF",

    category: "Shipping Cost Optimization",
    badge: "₹6.2L Freight Saved",
    tagline: "Streetwear brand pre-verified COD intent via WhatsApp and routed parcels through highest-SLA couriers per individual postal code.",
    thumbnail: "/ndrcourier.png",
    heroImage: "/ndrcourier.png",
    summary:
      "Protecting profit margins for Gen-Z sneaker brand with AI Shyp's pre-dispatch COD buyer verification, RTO risk scoring, and dynamic courier rate comparison.",
    challenge:
      "Impulse COD buyers cancelled orders at the doorstep, resulting in a 31% return rate and heavy dead freight bills on bulky sneaker boxes.",
    solution:
      "Activated AI Shyp's pre-shipping WhatsApp COD confirmation bot and automated courier selection to always pick the lowest rate courier that met delivery SLA.",
    keyOutcome: "₹6.2 Lakhs saved in forward & reverse freight within 90 days",

    // ── 1. CUSTOMER NAME & PROFILE ──
    // customerName: "Karan Oberoi",
    // customerRole: "Co-Founder",
    customerCompany: "ShipDelhi",
    customerLocation: "Delhi NCR & Chandigarh Storefront",
    customerScale: "Gen-Z D2C streetwear brand, 5,000+ monthly orders",

    // ── 2. HOW THE CUSTOMER USES THE AI SHYP PANEL ──
    howTheyUsePanel: [
      {
        stepNumber: 1,
        title: "Pre-Dispatch WhatsApp Confirmation Bot",
        desc: "Upon order placement, AI Shyp sends an automated message prompting the buyer: 'Confirm COD Order or Pay Online for ₹50 Off'.",
      },
      {
        stepNumber: 2,
        title: "Pincode Risk Score Evaluation",
        desc: "The AI fraud engine evaluates historical pincode return data; high-risk addresses are prompted to submit a minor token payment.",
      },
      {
        stepNumber: 3,
        title: "Real-Time Rate Comparison Engine",
        desc: "Upon packaging, the panel compares live pricing across 6 couriers (Delhivery, DTDC, Shadowfax) and auto-assigns the most cost-effective option.",
      },
      {
        stepNumber: 4,
        title: "Live Delivery Exception Notifications",
        desc: "If a delivery attempt fails, instant alerts enable the brand's customer success agents to contact the buyer immediately.",
      },
    ],

    // ── 3. CUSTOMER FEEDBACK & EXPERIENCE ──
    customerFeedback: {
      rating: 5.0,
      headline: "AI Shyp's pre-shipping verification bot prevented hundreds of bogus orders before packaging.",
      quote:
        "For a young sneaker brand, high RTO can easily sink your business. AI Shyp's WhatsApp confirmation bot alone prevented hundreds of bogus dispatches. We saved over ₹6 Lakhs that we directly invested into new product inventory.",
      author: "Karan Oberoi",
      role: "Co-Founder",
      company: "ShipDelhi",
      avatarText: "KO",
      verified: true,
    },

    // ── 4. MEASURABLE CUSTOMER BENEFITS ──
    customerBenefits: [
      {
        metric: "₹6.2 Lakhs",
        title: "Saved in Forward & Reverse Freight",
        desc: "Eliminating bogus orders and unnecessary returns saved ₹6.2 Lakhs in courier charges within the first 90 days.",
      },
      {
        metric: "32.4% Bogus",
        title: "Fake Orders Intercepted Prior to Packing",
        desc: "32.4% of impulsive or invalid orders were filtered out before inventory was packed and dispatched.",
      },
      {
        metric: "-18% Cost",
        title: "Cheaper Shipping Cost per Consignment",
        desc: "Dynamic live rate comparison selected the lowest carrier price point per parcel, reducing average shipping spend by 18%.",
      },
      {
        metric: "+26% Prepaid",
        title: "COD Orders Converted to Advance UPI Payments",
        desc: "Automated instant discount UPI links successfully persuaded 26% of buyers to switch from COD to advance prepaid payment.",
      },
    ],

    metrics: [
      { label: "Net Freight Savings", value: "₹6.2 Lakhs", subtext: "Achieved in first 90 days" },
      { label: "Bogus Orders Intercepted", value: "32.4%", subtext: "Cancelled before dispatch" },
      { label: "Courier Cost / Unit", value: "-18%", subtext: "Dynamic rate card matching" },
      { label: "Cash Flow Recovery", value: "96.2%", subtext: "Higher prepaid conversion" },
    ],
    beforeAfter: [
      {
        metric: "Pre-Dispatch Order Vetting",
        before: "Zero validation; packed and shipped all orders",
        after: "Automated WhatsApp bot confirms address and COD intent",
      },
      {
        metric: "High-Risk COD Orders",
        before: "Shipped blindly, resulting in 31% RTO",
        after: "Flagged by AI Shyp risk engine to request ₹99 advance",
      },
      {
        metric: "Freight Cost Comparison",
        before: "Fixed flat rate with single courier",
        after: "Real-time rate check across 6 couriers per parcel",
      },
      {
        metric: "Lost Forward Freight",
        before: "₹2.4 Lakhs wasted monthly on unaccepted dispatches",
        after: "Reduced by 68% in the first quarter",
      },
    ],
    carriersUsed: ["Delhivery", "DTDC", "Shadowfax", "Xpressbees"],
    customerOverview:
      "ShipDelhi is an urban streetwear and custom footwear brand with a hyper-engaged youth audience primarily purchasing via social media and mobile storefronts.",
    businessChallenges: [
      "Frequent fake or prank COD orders placed with invalid phone numbers or addresses.",
      "High shipping costs for express delivery across tier-2 and tier-3 colleges and towns.",
      "Lack of automated rules to require small token advance payments from repeat RTO offenders.",
    ],
    featuresUsed: [
      "WhatsApp Pre-Shipping COD Confirmation & Conversion Bot",
      "Historical Pincode Risk & Fraud Scoring",
      "Algorithmic Best-Rate Courier Selector",
      "Live Exception Notification & Real-Time Reattempt Request",
    ],
    implementationOverview:
      "Connected ShipDelhi's custom web store with AI Shyp's order verification API in 2 days. Created automated WhatsApp workflows for order confirmation.",
    verifiedResults: [
      "32.4% of high-risk or fake orders weeded out before packaging materials were consumed.",
      "Converted 26% of verified COD orders into full prepaid transactions with automated UPI discount links.",
      "Saved ₹6.2 Lakhs in unnecessary forward and return shipping charges within 3 months.",
      "Reduced average shipping cost per parcel by 18% using dynamic courier rate allocation.",
    ],
    testimonial: {
      author: "Karan Oberoi",
      role: "Co-Founder",
      quote:
        "For a young sneaker brand, high RTO can easily sink your business. AI Shyp's WhatsApp confirmation bot alone prevented hundreds of bogus dispatches. We saved over ₹6 Lakhs that we directly invested into new product inventory.",
      avatarText: "KO",
      company: "ShipDelhi",
      verified: true,
    },
    relatedSlugs: ["ship2me-shipping-management", "easyshipping-courier-management"],
  },
  {
    slug: "shypkart-shipping-management",
    company: "Shypkart",
    brandLogoText: "SKM",

    category: "Multi-Courier Management",
    badge: "1 API • 14 Carriers",
    tagline: "Centralized multi-vendor logistics across 65 supplier warehouses with automated vendor pickup dispatch and automated weight audits.",
    thumbnail: "/cod.png",
    heroImage: "/cod.png",
    summary:
      "Unifying multi-vendor marketplace fulfillment with AI Shyp's single API integration, vendor pickup dispatch, and automated weight dispute reconciliation.",
    challenge:
      "Coordinating dispatches across 65 independent vendor locations with different couriers led to massive reconciliation errors and lost shipments.",
    solution:
      "Deployed AI Shyp's unified multi-origin shipping API, giving every vendor an isolated dispatch portal with automatic pickup manifestation and consolidated tracking.",
    keyOutcome: "Consolidated 65 vendor nodes onto 1 master dashboard with 99.8% order accuracy",

    // ── 1. CUSTOMER NAME & PROFILE ──
    // customerName: "Ananya Deshmukh",
    // customerRole: "Chief Technology Officer",
    customerCompany: "Shypkart",
    customerLocation: "Pune, Jaipur & Pan-India Supplier Network",
    customerScale: "65 merchant fulfillment nodes, 25,000+ monthly orders",

    // ── 2. HOW THE CUSTOMER USES THE AI SHYP PANEL ──
    howTheyUsePanel: [
      {
        stepNumber: 1,
        title: "Unified Multi-Origin Shipping API",
        desc: "Each of the 65 supplier warehouses operates an isolated sub-account on the AI Shyp console to generate compliant thermal shipping labels.",
      },
      {
        stepNumber: 2,
        title: "Automated Carrier Pickup Manifesting",
        desc: "When a vendor packs an order, the system automatically schedules carrier pickup vans (Delhivery or BlueDart) directly to the vendor's location.",
      },
      {
        stepNumber: 3,
        title: "Consolidated Multi-Package Tracking",
        desc: "Regardless of how many supplier locations an order ships from, the consumer receives a single branded tracking link covering all packages.",
      },
      {
        stepNumber: 4,
        title: "Daily Automated Freight Reconciliation",
        desc: "The system automatically synchronizes daily freight billing CSV ledgers, eliminating manual month-end vendor invoice disputes.",
      },
    ],

    // ── 3. CUSTOMER FEEDBACK & EXPERIENCE ──
    customerFeedback: {
      rating: 5.0,
      headline: "Integrating 14 courier APIs individually would have taken 9 months; AI Shyp went live in 5 days.",
      quote:
        "Building custom integrations with 10 different courier APIs would have taken our engineering team 9 months. With AI Shyp, we plugged into 14 carriers in less than a week. It is the backbone of our multi-vendor logistics.",
      author: "Ananya Deshmukh",
      role: "Chief Technology Officer",
      company: "Shypkart",
      avatarText: "AD",
      verified: true,
    },

    // ── 4. MEASURABLE CUSTOMER BENEFITS ──
    customerBenefits: [
      {
        metric: "14 Carriers",
        title: "Zero Individual Courier Contracts",
        desc: "Gained immediate enterprise rate card access to 14 top Indian couriers through a single master agreement and API integration.",
      },
      {
        metric: "12 Hours",
        title: "Vendor Dispatch Latency Slashed",
        desc: "Average vendor packaging and pickup handoff latency dropped from 48 hours down to under 12 hours nationwide.",
      },
      {
        metric: "₹7.4L Saved",
        title: "Recovered Unjustified Weight Overcharges",
        desc: "Automated weight auditing successfully disputed incorrect volumetric freight penalties, recovering ₹7.4 Lakhs for marketplace merchants.",
      },
      {
        metric: "99.8% SLA",
        title: "Flawless Multi-Origin Order Accuracy",
        desc: "Standardized thermal barcode formatting reduced hub sorting mismatches to an industry-leading 0.02%.",
      },
    ],

    metrics: [
      { label: "Vendor Nodes", value: "65 Warehouses", subtext: "Coordinated under 1 master API" },
      { label: "Carrier APIs Unified", value: " 28 states", subtext: "Zero separate contract overhead" },
      { label: "Weight Disputes", value: "-92%", subtext: "Automated digital scale capture" },
      { label: "Order Accuracy", value: "99.8%", subtext: "Automated barcode cross-check" },
    ],
    beforeAfter: [
      {
        metric: "Vendor Coordination",
        before: "Each vendor used personal local courier accounts",
        after: "Single standardized AI Shyp panel with corporate rates",
      },
      {
        metric: "Consolidated Tracking",
        before: "Customers received 4 different tracking links",
        after: "One unified branded marketplace tracking portal",
      },
      {
        metric: "Pickup Scheduling",
        before: "Vendor phone calls with delivery boys",
        after: "Automated carrier API pickup manifest dispatch",
      },
      {
        metric: "Billing & Margin Reconciliation",
        before: "3 weeks of manual invoice cross-checking",
        after: "Instant downloadable daily CSV ledger and balance sync",
      },
    ],
    carriersUsed: ["Delhivery", "BlueDart", "DTDC", "Xpressbees", "Ekart", "Shadowfax"],
    customerOverview:
      "Shypkart operates a curated marketplace featuring regional specialty groceries, handmade craft goods, and artisanal lifestyle essentials across India.",
    businessChallenges: [
      "Inability to track whether individual third-party vendors handed packages to couriers on time.",
      "Carriers frequently overcharged for package weights, with no centralized system to dispute errors.",
      "Customer dissatisfaction caused by inconsistent shipping labels and mismatched tracking interfaces.",
    ],
    featuresUsed: [
      "Multi-Origin Pickup Dispatch & Scheduling API",
      "Single Unified Integration for 14+ Courier Carriers",
      "Vendor Role-Based Access Control (RBAC)",
      "Automated Weight Dispute & Discrepancy Reconciliation",
    ],
    implementationOverview:
      "Integrated marketplace backend with AI Shyp webhooks in 5 days, onboarding 65 vendor hubs with automated pickup configurations.",
    verifiedResults: [
      "Cut operational overhead of managing multiple courier agreements down to zero.",
      "Reduced vendor dispatch lag from 48 hours to under 12 hours nationwide.",
      "Recovered ₹7.4 Lakhs in unjustified courier volumetric weight penalties.",
      "Increased repeat marketplace purchase frequency by 22% via unified shipment tracking.",
    ],
    testimonial: {
      author: "Ananya Deshmukh",
      role: "Chief Technology Officer",
      quote:
        "Building custom integrations with 10 different courier APIs would have taken our engineering team 9 months. With AI Shyp, we plugged into 14 carriers in less than a week. It is the backbone of our multi-vendor logistics.",
      avatarText: "AD",
      company: "Shypkart",
      verified: true,
    },
    relatedSlugs: ["shipdelhi-courier-management", "nexship-shipping-operations"],
  },
  {
    slug: "parcel-setu-shipping-management",
    company: "Parcelsetu",
    brandLogoText: "PSC",

    category: "Shipping Cost Optimization",
    badge: "24% Freight Reduction",
    tagline: "Commercial wholesale supplier slashed heavy parcel surface shipping costs by 24% and automated electronic Proof-of-Delivery.",
    thumbnail: "/bestshipping.png",
    heroImage: "/bestshipping.png",
    summary:
      "Optimizing heavy freight logistics (10kg to 120kg) with AI Shyp's enterprise surface rate cards, digital ePOD capture, and automated dock pickup scheduling.",
    challenge:
      "Traditional B2C couriers charged exorbitant surcharges on parcels over 10kg, while manual paper Proof-of-Delivery delayed client invoice approvals.",
    solution:
      "Connected AI Shyp's heavy surface carrier network with automated digital electronic POD capture and instant dock appointment scheduling.",
    keyOutcome: "24% lower freight costs on commercial consignments & instant digital ePODs",

    // ── 1. CUSTOMER NAME & PROFILE ──
    // customerName: "Harish Vardhan",
    // customerRole: "Director of Supply Chain & Distribution",
    customerCompany: "Parcelsetu",
    customerLocation: "Indore & Manesar Logistics Parks",
    customerScale: "80,000+ kg monthly commercial surface freight",

    // ── 2. HOW THE CUSTOMER USES THE AI SHYP PANEL ──
    howTheyUsePanel: [
      {
        stepNumber: 1,
        title: "B2B Heavy Cargo Rate Slab Comparison",
        desc: "For consignments between 10kg and 120kg, the platform automatically compares surface carrier slabs (Delhivery Surface, DTDC Cargo) to book the lowest rate.",
      },
      {
        stepNumber: 2,
        title: "Instant Digital ePOD Upload",
        desc: "When a consignee signs the physical delivery note, the driver uploads a digital photo that surfaces in the AI Shyp console within seconds.",
      },
      {
        stepNumber: 3,
        title: "Automated Line-Haul Dock Scheduling",
        desc: "The warehouse team schedules freight truck appointments directly via the panel without manual coordination with regional dispatchers.",
      },
      {
        stepNumber: 4,
        title: "Automated ERP Invoice Triggers",
        desc: "Verified ePOD events trigger webhooks directly into the enterprise finance ERP, accelerating client invoice sign-offs by 5x.",
      },
    ],

    // ── 3. CUSTOMER FEEDBACK & EXPERIENCE ──
    customerFeedback: {
      rating: 5.0,
      headline: "AI Shyp's digital ePOD automation reduced our corporate payment collection cycle from 45 days down to 12 days.",
      quote:
        "In B2B shipping, physical paper delivery slips were our biggest headache. AI Shyp's automated digital ePODs allow our accounts department to invoice corporate clients the same day a pallet is signed for. It solved our cash collection delays.",
      author: "Harish Vardhan",
      role: "Director of Supply Chain & Distribution",
      company: "Parcelsetu",
      avatarText: "HV",
      verified: true,
    },

    // ── 4. MEASURABLE CUSTOMER BENEFITS ──
    customerBenefits: [
      {
        metric: "-24% Cost",
        title: "Lower Heavy Surface Freight Expenditure",
        desc: "Replacing retail carrier pricing with aggregated commercial surface weight slabs cut total freight expenditure by 24%.",
      },
      {
        metric: "12 Days",
        title: "Accelerated Corporate Account Settlements",
        desc: "Invoices previously delayed awaiting paper receipts are now approved upon digital delivery, speeding payments from 45 to 12 days.",
      },
      {
        metric: "100% ePOD",
        title: "Zero Lost Paper Proof-of-Delivery Slips",
        desc: "Lost physical delivery receipts are completely eliminated, with all consignee signatures safely archived in cloud storage.",
      },
      {
        metric: "GPS Live",
        title: "Comprehensive Line-Haul Checkpoint Tracking",
        desc: "Complete real-time visibility across state border crossings, highway line-hauls, and delivery dock arrivals.",
      },
    ],

    metrics: [
      { label: "Freight Cost Savings", value: "24%", subtext: "On heavy B2B surface cargo" },
      { label: "ePOD Turnaround", value: "Instant", subtext: "Digital image upload upon delivery" },
      { label: "Invoice Processing", value: "5x Faster", subtext: "Zero wait for physical paper delivery slips" },
      { label: "Consignment Tracking", value: "100%", subtext: "GPS line-haul checkpoint visibility" },
    ],
    beforeAfter: [
      {
        metric: "Heavy Cargo Rate Card",
        before: "Standard retail rates with heavy excess fees",
        after: "Aggregated B2B commercial surface negotiated slabs",
      },
      {
        metric: "Proof of Delivery Retrieval",
        before: "Physical paper slips mailed 14 days later",
        after: "Instant digital ePOD with signature in customer portal",
      },
      {
        metric: "Dock Pickup Scheduling",
        before: "Manual phone calls to transport dispatchers",
        after: "1-click automated truck arrival request",
      },
      {
        metric: "Invoice Reconciliation",
        before: "Blocked until paper receipts were filed",
        after: "Automated billing sign-off triggered by ePOD",
      },
    ],
    carriersUsed: ["Delhivery Surface", "DTDC Cargo", "Safexpress API", "BlueDart Surface"],
    customerOverview:
      "Parcel Setu distributes industrial supplies, machine hardware, and bulk spare parts to factories and automotive workshops across 18 Indian states.",
    businessChallenges: [
      "Freight bills on consignments exceeding 20kg were eating away at wholesale operating margins.",
      "B2B corporate clients refused to clear final invoices without stamped Proof-of-Delivery documents.",
      "Delays in getting surface line-haul trucks dispatched to factory warehouses for heavy pallet loading.",
    ],
    featuresUsed: [
      "B2B Heavy Parcel & Surface Cargo Aggregation",
      "Instant Electronic Proof-of-Delivery (ePOD) Storage",
      "Automated Line-Haul & Transit Milestone Tracking",
      "Dedicated Corporate Enterprise Billing Console",
    ],
    implementationOverview:
      "Onboarded Parcel Setu's ERP and regional distribution centers with AI Shyp within 4 business days. Enabled instant ePOD webhooks to trigger finance ERP invoices.",
    verifiedResults: [
      "Saved 24% on total surface freight expenditure across 80,000+ kg of monthly cargo.",
      "Corporate client invoice payment cycles accelerated from 45 days down to 12 days.",
      "Eliminated lost paper receipts completely through cloud-stored digital signatures.",
      "Zero missed carrier pickups with automated dock scheduling alerts.",
    ],
    testimonial: {
      author: "Harish Vardhan",
      role: "Director of Supply Chain & Distribution",
      quote:
        "In B2B shipping, physical paper delivery slips were our biggest headache. AI Shyp's automated digital ePODs allow our accounts department to invoice corporate clients the same day a pallet is signed for. It solved our cash collection delays.",
      avatarText: "HV",
      company: "Parcelsetu",
      verified: true,
    },
    relatedSlugs: ["ship2me-shipping-management", "easyshipping-courier-management"],
  },
];

export function getAllSuccessStories() {
  return SUCCESS_STORIES;
}

export function getSuccessStoryBySlug(slug) {
  return SUCCESS_STORIES.find((story) => story.slug === slug) || null;
}

export function getFeaturedSuccessStories(count = 3) {
  return SUCCESS_STORIES.slice(0, count);
}

export function getRelatedSuccessStories(currentSlug, count = 2) {
  const current = getSuccessStoryBySlug(currentSlug);
  if (!current) return SUCCESS_STORIES.slice(0, count);

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const related = current.relatedSlugs
      .map((slug) => getSuccessStoryBySlug(slug))
      .filter(Boolean);
    if (related.length >= count) return related.slice(0, count);
  }

  return SUCCESS_STORIES.filter((s) => s.slug !== currentSlug).slice(0, count);
}
