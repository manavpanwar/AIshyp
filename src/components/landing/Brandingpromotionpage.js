"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, ArrowRight, Video, Megaphone, Box, Truck, Store, Smartphone, BarChart3, Check, X, Eye, Flame, } from "lucide-react";

const CAROUSEL_CATEGORIES = [
    "All Brand Assets",
    "Packaging & Merch",
    "Fleet & Vehicle",
    "Hub Signage",
    "Digital Tracking",
    "Sales Enablement"
];

const CAROUSEL_ITEMS = [
    {
        id: 1,
        category: "Packaging & Merch",
        categoryTag: "Physical Branding",
        src: "/brand/brand2.jpeg",
        title: "100% Custom Branded Packaging & Tamper-Proof Tapes",
        caption: "Every parcel leaving your merchant's warehouse carries your franchise logo, colors, and direct helpline for supreme consumer recall.",
        impact: "300% Higher Brand Recall",
        badge: "Highest Merchant Retention",
        benefits: [
            "Pre-printed high-grade corrugated boxes in all standard courier sizes",
            "Water-activated reinforced security tape with your brand logo & helpline",
            "Custom thermal shipping labels featuring direct QR code tracking"
        ],
        marketingTip: "Merchants love packaging that elevates their unboxing experience — this alone closes 40% of local D2C brands."
    },
    {
        id: 2,
        category: "Fleet & Vehicle",
        categoryTag: "Hyperlocal BTL",
        src: "/brand/brand3.jpeg",
        title: "Mobile Billboards: Full Fleet & Pickup Van Vinyl Wraps",
        caption: "Turn daily merchant pickup rounds into high-impact moving advertisements across key industrial estates and e-commerce clusters.",
        impact: "24/7 Local Visibility",
        badge: "Zero Ongoing Ad Spend",
        benefits: [
            "High-durability all-weather vehicle vinyl wrap blueprints & source files",
            "Driver & pickup agent uniforms with partner badges and caps",
            "Magnetic car & two-wheeler branding kit for rapid fleet onboarding"
        ],
        marketingTip: "Your vans navigating e-commerce warehousing clusters generate high-trust inbound merchant inquiries every single day."
    },
    {
        id: 3,
        category: "Hub Signage",
        categoryTag: "Storefront Presence",
        src: "/brand/brand1.jpeg",
        title: "Turnkey Branch Signage, Backlit Acrylic Boards & Canopies",
        caption: "Command instant trust from local merchants, exporters, and retail walk-ins with standardized enterprise storefront branding.",
        impact: "3.8x Local Merchant Trust",
        badge: "Enterprise Authority",
        benefits: [
            "Standardized 3D acrylic backlit signage templates ready for production",
            "Outdoor promotional canopy & roll-up standees for merchant expos & BTL",
            "Customer reception branding kit: rate matrices, drop-box & partner certification"
        ],
        marketingTip: "A physical presence with enterprise-grade signage immediately differentiates you from unorganized local agents."
    },
    {
        id: 4,
        category: "Digital Tracking",
        categoryTag: "Digital Marketing Engine",
        src: "/brand/banner.png",
        title: "White-Label Live Tracking Portal with In-Built Ad Banners",
        caption: "Replace boring third-party tracking links with your own interactive portal featuring merchant promotional banners and coupon codes.",
        impact: "42% Repeat Order Clicks",
        badge: "High Monetization",
        benefits: [
            "Hosted 100% on your custom domain (e.g. track.yourbrand.com)",
            "Dynamic in-built ad banner space to cross-sell merchant products or your services",
            "Automated WhatsApp & SMS delivery alerts with your official brand sender ID"
        ],
        marketingTip: "Consumers check tracking links 4.2 times per order — monetize that attention for your merchants to boost their sales."
    },
    {
        id: 6,
        category: "Packaging & Merch",
        categoryTag: "Ecosystem Growth",
        src: "/brand/brand4.jpeg",
        title: "Annual Partner Summit, Strategy Meets & Co-Marketing",
        caption: "Network with top 100+ logistics franchise owners, exchange merchant acquisition scripts, and access joint national marketing campaigns.",
        impact: "500+ Franchise Network",
        badge: "Collective Scale",
        benefits: [
            "Quarterly growth masterclasses with logistics scale mentors",
            "Joint B2B marketing leads distributed directly to your local franchise hub",
            "Exclusive performance awards and tiered courier rate discount unlocks"
        ],
        marketingTip: "Tap into proven merchant acquisition playbooks tested across 25+ major logistics hubs in India."
    }
];


const VIDEOS = [
    {
        id: "v1",
        title: "How AI Shyp Scales Your Shipping Brand to 7 Figures",
        category: "Brand Strategy",
        duration: "2:14",
        src: "/brand/AI_Shyp_Customer_Marketing_Landscape.mp4",
        poster: "/brand/banner.png",
        tagline: "The complete blueprint to launching a multi-crore courier brand with zero software development.",
        views: "18.4K",
        rating: "4.9",
        badge: "Most Watched",
        takeaways: [
            "Launch under your own custom domain & brand identity in under 7 days",
            "Keep 100% of your shipping margins with zero royalty cuts",
            "Automate merchant onboarding, billing, and multi-carrier routing seamlessly"
        ]
    },
    {
        id: "v2",
        title: "Merchant Acquisition Playbook: Onboarding 50+ D2C Brands",
        category: "Growth Playbook",
        duration: "1:45",
        src: "/video1.mp4",
        poster: "/brand/brand1.jpeg",
        tagline: "Proven cold outreach scripts, WhatsApp pitch frameworks, and merchant closing strategies.",
        views: "14.2K",
        rating: "4.9",
        badge: "High Conversion",
        takeaways: [
            "How to identify high-volume eCommerce shippers in your local pin codes",
            "Using the Rate Comparison Tool to show immediate 18-25% shipping savings",
            "Structuring credit limits and fast COD remittance to build merchant loyalty"
        ]
    },
    {
        id: "v3",
        title: "White-Label Tracking & Custom Packaging Live Demo",
        category: "Branding Suite",
        duration: "1:30",
        src: "/video2.mp4",
        poster: "/brand/brand2.jpeg",
        tagline: "See the live branded tracking page in action, complete with merchant ad banners and custom alerts.",
        views: "11.7K",
        rating: "4.8",
        badge: "Tech Feature",
        takeaways: [
            "Custom branded tracking page with your domain, logo, and merchant ad spaces",
            "Branded WhatsApp notifications with real-time live map updates",
            "Custom security tapes and courier boxes that build consumer trust"
        ]
    },
    {
        id: "v4",
        title: "Franchise Hub Operations & Fleet Branding Showcase",
        category: "Field Marketing",
        duration: "2:05",
        src: "/video3.mp4",
        poster: "/brand/brand3.jpeg",
        tagline: "Inside look into an operational hub, vehicle vinyl wraps, barcode scanning, and daily dispatch.",
        views: "15.9K",
        rating: "4.9",
        badge: "Operations",
        takeaways: [
            "Vehicle vinyl wrap templates that act as 24/7 mobile billboards in industrial areas",
            "Standard operating procedures for smooth daily merchant collections",
            "Turnkey hub setup: weigh scales, thermal barcode printers, and signage"
        ]
    },
    {
        id: "v5",
        title: "Partner Story: From 300 to 5,000 Parcels/Day in 6 Months",
        category: "Partner Story",
        duration: "2:40",
        src: "/video4.mp4",
        poster: "/brand/brand4.jpeg",
        tagline: "How marketing collateral, pitch decks, and AIshyp tech helped one partner dominate their city.",
        views: "22.1K",
        rating: "5.0",
        badge: "Case Study",
        takeaways: [
            "Scaled from zero to 45 active eCommerce merchants in the first 90 days",
            "Why merchants preferred working with a local branded partner over impersonal aggregators",
            "Key lessons on hiring pickup drivers and optimizing daily routes"
        ]
    }
];


const MARKETING_TOOLKIT = [
    {
        icon: Smartphone,
        title: "White-Label Live Tracking Portal",
        badge: "42% CTR Boost",
        description: "Every tracking link opens under your brand domain (e.g. track.yourbrand.com). Feature your merchant's promo banners, discounts, and product recommendations on every status check.",
        points: ["Your logo, favicon & colors", "In-built banner ad slots", "Repeat purchase coupon triggers"]
    },
    {
        icon: Megaphone,
        title: "Branded WhatsApp & SMS Engine",
        badge: "98% Open Rate",
        description: "Send automated milestone alerts (Order Dispatched, Out for Delivery, NDR Re-attempt) carrying your official franchise brand name instead of generic aggregator handles.",
        points: ["Official verified sender ID", "Interactive WhatsApp quick-reply buttons", "Automated RTO reduction flows"]
    },
    {
        icon: Box,
        title: "Custom Packaging & Security Tape Kit",
        badge: "Zero Setup Cost",
        description: "Turn every unboxing into a billboard. We provide ready-to-print die cuts for corrugated boxes, flyer bags, and tamper-proof security tape featuring your branding.",
        points: ["Custom printed logo seal tapes", "Eco-friendly corrugated box sizes", "Standardized thermal shipping labels"]
    },
    {
        icon: Truck,
        title: "Fleet & Van Vinyl Marketing Blueprints",
        badge: "24/7 Free Ad Impression",
        description: "Transform daily merchant collection runs into mobile billboards. Get professional vinyl wrap blueprints for pickup vans, bikes, and delivery driver uniforms.",
        points: ["Full vehicle wraps & door decals", "Driver t-shirts, caps & ID cards", "Magnetic temporary vehicle badges"]
    },
    {
        icon: BarChart3,
        title: "Merchant Sales Decks & Rate Calculators",
        badge: "65% Close Ratio",
        description: "Never lose a merchant due to lack of professional collateral. Walk into meetings equipped with customized pitch decks, rate comparison tools, and legal contract templates.",
        points: ["D2C and B2B ready PPT pitch decks", "Instant shipping savings calculator", "Ready-to-sign merchant SLA agreements"]
    },
    {
        icon: Store,
        title: "Hyperlocal BTL & Event Promotion Kit",
        badge: "Instant Local Trust",
        description: "Dominate local merchant expos, industrial estates, and retail hubs with our turnkey BTL kit featuring outdoor canopies, roll-up standees, and merchant flyers.",
        points: ["Backlit 3D acrylic storefront boards", "High-visibility promotional canopy", "Flyer templates with signup QR codes"]
    }
];


const COMPARISON_ROWS = [
    {
        aspect: "Brand Identity & URL",
        generic: "You are an invisible agent under the aggregator's name",
        aishyp: "100% Your Own Brand, Custom Domain & Logo",
        winner: "aishyp"
    },
    {
        aspect: "Customer Tracking Experience",
        generic: "Generic tracking link displaying competitor ads",
        aishyp: "Branded tracking page with your merchant's upsell banners",
        winner: "aishyp"
    },
    {
        aspect: "WhatsApp & SMS Alerts",
        generic: "Sent from aggregator's ID — zero brand recall for you",
        aishyp: "Your brand sender ID with interactive CTA buttons",
        winner: "aishyp"
    },
    {
        aspect: "Physical Collateral & Packaging",
        generic: "Zero marketing kits provided; pay external agencies",
        aishyp: "Full turnkey packaging, van wrap & signage blueprints included",
        winner: "aishyp"
    },
    {
        aspect: "Merchant Ownership & Loyalty",
        generic: "Aggregator can contact and bypass you at any time",
        aishyp: "You own 100% of merchant relationships and customer data",
        winner: "aishyp"
    },
    {
        aspect: "Profit Margin Control",
        generic: "Fixed meager commission (typically 5% to 8%)",
        aishyp: "You set your own merchant rates & keep 100% of profit (20% to 35%)",
        winner: "aishyp"
    }
];


const fadeUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};


function EnhancedImageCarousel() {
    const [selectedCategory, setSelectedCategory] = useState("All Brand Assets");
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [paused, setPaused] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);


    const filteredItems = CAROUSEL_ITEMS.filter((item) =>
        selectedCategory === "All Brand Assets" ? true : item.category === selectedCategory
    );


    useEffect(() => {
        setIndex(0);
    }, [selectedCategory]);

    const go = useCallback(
        (next) => {
            if (filteredItems.length === 0) return;
            setDirection(next > 0 ? 1 : -1);
            setIndex((i) => (i + next + filteredItems.length) % filteredItems.length);
        },
        [filteredItems.length]
    );

    const jump = (i) => {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    };


    useEffect(() => {
        if (paused || filteredItems.length <= 1) return;
        const timer = setInterval(() => go(1), 5000);
        return () => clearInterval(timer);
    }, [paused, go, filteredItems.length]);

    const current = filteredItems[index] || CAROUSEL_ITEMS[0];

    const slideVariants = {
        enter: (d) => ({ opacity: 0, x: d * 80, scale: 0.98 }),
        center: { opacity: 1, x: 0, scale: 1 },
        exit: (d) => ({ opacity: 0, x: d * -80, scale: 0.98 })
    };

    return (
        <div className="space-y-6">

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {CAROUSEL_CATEGORIES.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8331F] ${isActive
                                ? "bg-[#D8331F] text-white shadow-md shadow-[#D8331F]/25 scale-102"
                                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                                }`}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>


            <div
                className="relative bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div className="grid lg:grid-cols-12 min-h-[440px] lg:min-h-[500px]">
                    {/* Left: Image Container with Framing */}
                    <div className="lg:col-span-7 relative bg-slate-950 overflow-hidden min-h-[280px] sm:min-h-[380px] lg:min-h-full">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.img
                                key={current.id}
                                src={current.src}
                                alt={current.title}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 w-full h-full object-cover"
                                draggable={false}
                            />
                        </AnimatePresence>

                        {/* Visual Lighting Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-950/40 pointer-events-none" />

                        {/* Top Badge Overlay */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
                                <Sparkles className="w-3.5 h-3.5 text-[#D8331F]" />
                                {current.categoryTag}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-[#D8331F]/90 backdrop-blur-md text-[11px] font-sans font-bold text-white shadow-sm">
                                {current.badge}
                            </span>
                        </div>



                        {/* Bottom Metric Pill on Image */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/15 text-xs font-semibold">
                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                                <span>Impact: {current.impact}</span>
                            </div>
                            <span className="text-[11px] font-mono font-bold bg-slate-950/80 px-2.5 py-1 rounded-md text-slate-300">
                                {index + 1} / {filteredItems.length}
                            </span>
                        </div>

                        {/* Animated Progress Bar */}
                        {!paused && filteredItems.length > 1 && (
                            <motion.span
                                key={`progress-${current.id}-${index}`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="absolute left-0 bottom-0 h-1 bg-[#D8331F] z-20"
                            />
                        )}
                    </div>

                    {/* Right: Marketing Breakdown Details */}
                    <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-white via-[#FCFCFE] to-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4" />
                                    Franchise Marketing Asset
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setPaused(!paused)}
                                    className="text-xs font-mono text-slate-500 hover:text-slate-800 flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors"
                                >
                                    {paused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3" />}
                                    <span>{paused ? "Play" : "Pause"}</span>
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-3.5"
                                >
                                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 leading-tight">
                                        {current.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                                        {current.caption}
                                    </p>

                                    {/* Benefits Checklist */}
                                    <div className="pt-2 space-y-2">
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                            What’s Included in Your Marketing Kit:
                                        </p>
                                        <ul className="space-y-2">
                                            {current.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Marketing Pro-Tip Callout Box */}
                                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-800 text-xs leading-relaxed flex items-start gap-2.5">
                                        <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-bold text-amber-900">Marketing Tip: </span>
                                            <span className="text-slate-700">{current.marketingTip}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Controls Bottom Bar */}
                        <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between gap-3 mt-4">
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => go(-1)}
                                    aria-label="Previous asset"
                                    className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm flex items-center justify-center transition-all cursor-pointer hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8331F]"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => go(1)}
                                    aria-label="Next asset"
                                    className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm flex items-center justify-center transition-all cursor-pointer hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8331F]"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <a
                                href="#partner-form"
                                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D8331F] hover:bg-[#b82a19] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8331F]"
                            >
                                <span>Get this collateral</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {filteredItems.map((item, i) => {
                    const active = i === index;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => jump(i)}
                            aria-label={`View slide ${item.title}`}
                            className={`group relative shrink-0 w-24 sm:w-32 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8331F] ${active
                                ? "border-[#D8331F] shadow-lg shadow-[#D8331F]/20 scale-102 ring-2 ring-[#D8331F]/30"
                                : "border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300"
                                }`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                            <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-sans font-bold text-white truncate text-left">
                                {item.categoryTag}
                            </span>
                            {active && (
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D8331F] animate-pulse" />
                            )}
                        </button>
                    );
                })}
            </div>


            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-md"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={current.src}
                                alt={current.title}
                                className="w-full max-h-[75vh] object-contain bg-slate-950"
                            />
                            <div className="p-4 sm:p-6 bg-slate-900 flex items-center justify-between text-white border-t border-slate-800">
                                <div>
                                    <h4 className="font-bold text-sm sm:text-base">{current.title}</h4>
                                    <p className="text-xs text-slate-400 mt-0.5">{current.caption}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setLightboxOpen(false)}
                                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function EnhancedVideoShowcase() {
    const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleSelect = (v) => {
        if (v.id === activeVideo.id) {
            setIsPlaying(!isPlaying);
            return;
        }
        setActiveVideo(v);
        setIsPlaying(true);
    };

    useEffect(() => {
        if (isPlaying && videoRef.current) {
            videoRef.current.play().catch(() => { });
        } else if (!isPlaying && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isPlaying, activeVideo]);

    return (
        <div className="space-y-6">
            <div className="grid lg:grid-cols-12 gap-6 items-start">
                {/* Main Video Cinema Screen */}
                <div className="lg:col-span-8 space-y-4">
                    <div className="relative group aspect-video rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
                        {/* Ambient Red/Glow Backdrop behind Player */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#D8331F]/30 via-transparent to-blue-600/10 blur-2xl opacity-50 -z-10" />

                        {isPlaying ? (
                            <video
                                key={activeVideo.id}
                                ref={videoRef}
                                src={activeVideo.src}
                                poster={activeVideo.poster}
                                controls
                                autoPlay
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover bg-black"
                            />
                        ) : (
                            <button
                                type="button"
                                onClick={() => setIsPlaying(true)}
                                aria-label={`Play ${activeVideo.title}`}
                                className="relative w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D8331F]/60 overflow-hidden text-left"
                            >
                                <img
                                    src={activeVideo.poster}
                                    alt={activeVideo.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

                                {/* Top Badges on Video Cover */}
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-bold border border-white/10 flex items-center gap-1.5 text-amber-400">
                                        <Flame className="w-3.5 h-3.5 text-[#D8331F]" />
                                        {activeVideo.category}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-[#D8331F] text-[11px] font-bold text-white shadow-lg">
                                        {activeVideo.badge}
                                    </span>
                                </div>

                                {/* Center Animated Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative flex items-center justify-center">
                                        <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D8331F]/40 animate-ping" />
                                        <span className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D8331F] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#b82a19]">
                                            <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Info Overlay on Video Cover */}
                                <div className="absolute left-0 bottom-0 right-0 p-5 sm:p-7 text-white">
                                    <div className="flex items-center gap-3 text-xs font-mono text-slate-300 mb-2">
                                        <span className="bg-slate-900/90 px-2.5 py-0.5 rounded border border-white/10 font-bold">
                                            {activeVideo.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-3.5 h-3.5 text-slate-400" />
                                            {activeVideo.views} views
                                        </span>
                                        <span>•</span>
                                        <span className="text-amber-400 font-bold">★ {activeVideo.rating} / 5.0</span>
                                    </div>
                                    <h3 className="font-sans font-extrabold text-lg sm:text-2xl lg:text-3xl leading-snug">
                                        {activeVideo.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 line-clamp-2">
                                        {activeVideo.tagline}
                                    </p>
                                </div>
                            </button>
                        )}
                    </div>

                    {/* Key Takeaways Card Below Active Video */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-[#D8331F]" />
                                Key Masterclass Takeaways:
                            </h4>
                            <span className="text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                Verified Playbook
                            </span>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-3 pt-1">
                            {activeVideo.takeaways.map((point, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium space-y-1.5"
                                >
                                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Step {idx + 1}</span>
                                    </div>
                                    <p className="leading-relaxed text-slate-600">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Playlist Sidebar */}
                <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center justify-between pb-1">
                        <p className="text-xs font-mono font-bold tracking-wider uppercase text-slate-500">
                            Video Playlist ({VIDEOS.length} Playbooks)
                        </p>
                        <span className="text-xs font-sans font-semibold text-[#D8331F]">
                            Updated for 2026
                        </span>
                    </div>

                    <div className="space-y-2.5">
                        {VIDEOS.map((v) => {
                            const isCurrent = v.id === activeVideo.id;
                            return (
                                <button
                                    key={v.id}
                                    type="button"
                                    onClick={() => handleSelect(v)}
                                    className={`w-full group flex gap-3.5 items-center p-3 rounded-2xl border text-left transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8331F] ${isCurrent
                                        ? "bg-white border-[#D8331F] border-l-4 shadow-lg ring-1 ring-[#D8331F]/20 scale-101"
                                        : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                                        }`}
                                >
                                    {/* Thumbnail */}
                                    <div className="relative shrink-0 w-24 sm:w-28 aspect-video rounded-xl overflow-hidden bg-slate-950">
                                        <img
                                            src={v.poster}
                                            alt={v.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            draggable={false}
                                        />
                                        <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors" />

                                        {/* Play Icon / Waveform indicator */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {isCurrent && isPlaying ? (
                                                <div className="flex items-center gap-0.5 px-2 py-1 rounded bg-black/70 backdrop-blur">
                                                    <span className="w-1 h-3 bg-[#D8331F] rounded animate-pulse" />
                                                    <span className="w-1 h-4 bg-[#D8331F] rounded animate-pulse delay-75" />
                                                    <span className="w-1 h-2 bg-[#D8331F] rounded animate-pulse delay-150" />
                                                </div>
                                            ) : (
                                                <div className="w-6 h-6 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow">
                                                    <Play className="w-3 h-3 ml-0.5 fill-current" />
                                                </div>
                                            )}
                                        </div>

                                        <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-white bg-slate-950/80 px-1.5 py-0.5 rounded">
                                            {v.duration}
                                        </span>
                                    </div>

                                    {/* Text Description */}
                                    <div className="min-w-0 flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono font-bold text-[#D8331F] uppercase tracking-wide">
                                                {v.category}
                                            </span>
                                            {isCurrent && (
                                                <span className="text-[10px] font-sans font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                                    {isPlaying ? "Playing Now" : "Selected"}
                                                </span>
                                            )}
                                        </div>
                                        <h4
                                            className={`text-xs sm:text-sm font-extrabold font-sans leading-snug line-clamp-2 transition-colors ${isCurrent ? "text-[#D8331F]" : "text-slate-900 group-hover:text-slate-800"
                                                }`}
                                        >
                                            {v.title}
                                        </h4>
                                        <p className="text-[11px] text-slate-500 font-medium truncate">
                                            {v.views} views • {v.badge}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default function Brandingpromotionpage() {
    return (
        <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAFC] text-slate-900 border-t border-slate-200/80 overflow-hidden font-sans">
            {/* Background Ambient Aesthetics */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#D8331F]/5 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-0" />
            <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-blue-500/5 blur-3xl pointer-events-none -z-0" />

            <div className="max-w-7xl mx-auto w-full space-y-16 sm:space-y-24 relative z-10">
                {/* ---------------- 1. Hero Section ---------------- */}
                <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto space-y-5">
                    {/* Top Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D8331F]/10 border border-[#D8331F]/20 text-[#D8331F] text-xs font-mono font-bold tracking-wider uppercase">
                        <Megaphone className="w-3.5 h-3.5" />
                        Turnkey Branding & Promotion Kit Included
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.15] tracking-tight">
                        Launch your own courier brand with{" "}<span className="text-[#D8331F] relative inline-block">100% White-Label </span>marketing power.
                    </h1>

                    {/* Sub-copy */}
                    <p className="text-slate-600 text-sm sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Why be an invisible agent for other delivery apps? AIShyp provides the complete marketing
                        arsenal — branded packaging, live tracking portals, vehicle wraps, and merchant pitch
                        decks — so you command 100% profit margins under your own brand identity.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
                        <a
                            href="#partner-form"
                            className="bg-[#D8331F] hover:bg-[#b82a19] text-white font-bold font-sans text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#D8331F]/25 hover:shadow-xl hover:shadow-[#D8331F]/35 transition-all transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D8331F]/40"
                        >
                            Claim Your Free Marketing Kit
                        </a>
                        <a
                            href="#videos"
                            className="bg-white hover:bg-slate-50 text-slate-900 font-bold font-sans text-sm sm:text-base px-7 py-3.5 rounded-xl border border-slate-300 shadow-sm hover:shadow transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
                        >
                            <Play className="w-4 h-4 fill-current text-[#D8331F]" />
                            <span>Watch Masterclass Videos</span>
                        </a>
                    </div>

                    {/* Live Marketing Impact Metrics Bar */}
                    <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                            <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-[#D8331F]">
                                300%
                            </span>
                            <span className="text-xs font-semibold text-slate-600 mt-1 block">
                                Higher Brand Recall
                            </span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                            <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-emerald-600">
                                42%
                            </span>
                            <span className="text-xs font-semibold text-slate-600 mt-1 block">
                                Repeat Tracking Clicks
                            </span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                            <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-slate-900">
                                50+
                            </span>
                            <span className="text-xs font-semibold text-slate-600 mt-1 block">
                                Merchants / Mo Playbook
                            </span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
                            <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-amber-500">
                                ₹0
                            </span>
                            <span className="text-xs font-semibold text-slate-600 mt-1 block">
                                Upfront Agency Fees
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* ---------------- 2. Marketing Toolkit Grid ---------------- */}
                <motion.div {...fadeUp} className="space-y-8">
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#D8331F]">
                            Complete Growth Enablement
                        </p>
                        <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
                            Everything You Need to Market Like a Tier-1 Logistics Giant
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-medium">
                            We don’t just provide shipping software — we give you the exact physical and digital
                            marketing collateral needed to sign up dozens of e-commerce brands in your city.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {MARKETING_TOOLKIT.map((card, idx) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#D8331F]/30"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#D8331F] flex items-center justify-center transition-transform group-hover:scale-110">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <span className="text-[11px] font-mono font-bold text-[#D8331F] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                                                {card.badge}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-[#D8331F] transition-colors">
                                                {card.title}
                                            </h3>
                                            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-5 border-t border-slate-100 mt-5 space-y-2">
                                        {card.points.map((pt, pIdx) => (
                                            <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                                <span>{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ---------------- 3. Brand in Action Carousel ---------------- */}
                <motion.div {...fadeUp} id="brand-carousel" className="space-y-6 scroll-mt-20">
                    <div className="max-w-3xl space-y-2">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#D8331F]">
                            <Sparkles className="w-3.5 h-3.5" />
                            Visual Branding Showcase
                        </div>
                        <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
                            Explore Your Brand Collateral in Action
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-medium">
                            Real branches, delivery vehicles, custom packaging, and live tracking interfaces used by
                            active franchise owners across India.
                        </p>
                    </div>

                    <EnhancedImageCarousel />
                </motion.div>

                {/* ---------------- 4. Marketing Comparison Table ---------------- */}
                <motion.div {...fadeUp} className="space-y-6">
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#D8331F]">
                            Brand Equity vs Commodity Agent
                        </p>
                        <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
                            Why Having Your Own Brand Changes Everything
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-medium">
                            See how an AIShyp-powered white-label franchise compares to traditional courier agencies.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
                                <tr>
                                    <th className="p-4 sm:p-5 font-bold font-sans">Strategic Feature</th>
                                    <th className="p-4 sm:p-5 font-bold font-sans text-slate-500">
                                        Traditional Courier Agency
                                    </th>
                                    <th className="p-4 sm:p-5 font-bold font-sans text-[#D8331F] bg-red-50/50">
                                        AIShyp Branded Partner (You)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {COMPARISON_ROWS.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                                        <td className="p-4 sm:p-5 font-bold text-slate-900 font-sans">
                                            {row.aspect}
                                        </td>
                                        <td className="p-4 sm:p-5 text-slate-500">
                                            <div className="flex items-start gap-2">
                                                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                <span>{row.generic}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 sm:p-5 font-semibold text-slate-900 bg-red-50/20">
                                            <div className="flex items-start gap-2">
                                                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{row.aishyp}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* ---------------- 5. Video Masterclasses ---------------- */}
                <motion.div {...fadeUp} id="videos" className="space-y-6 scroll-mt-20">
                    <div className="max-w-3xl space-y-2">
                        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#D8331F]">
                            <Video className="w-3.5 h-3.5" />
                            Video Playbooks & Masterclasses
                        </div>
                        <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
                            Watch Franchise Partners Tell It Themselves
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base font-medium">
                            Step inside real partner hubs, watch live software demonstrations, and learn our exact
                            merchant acquisition frameworks.
                        </p>
                    </div>

                    <EnhancedVideoShowcase />
                </motion.div>

                {/* ---------------- 6. Partner Spotlight & Testimonial ---------------- */}
                <motion.div
                    {...fadeUp}
                    className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#101B3D] text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute right-0 top-0 w-96 h-96 bg-[#D8331F]/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-amber-400 border border-white/10">
                            ★ ★ ★ ★ ★ Verified Franchise Partner
                        </div>

                        <blockquote className="font-sans font-medium text-lg sm:text-2xl text-slate-100 leading-relaxed italic">
                            “We signed 34 active eCommerce merchants within our first 45 days. The game-changer was
                            AIShyp’s branded tracking portal and professional pitch decks — when merchants saw their
                            own logo on packaging and custom tracking links, they canceled their accounts with national
                            aggregators immediately.”
                        </blockquote>

                        <div className="pt-2">
                            <p className="font-sans font-bold text-base text-white">Mohit panwar</p>
                            <p className="text-xs text-slate-400">
                                Founders, Aishyp  (AIShyp Partner Network)
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ---------------- 8. High-Converting Closing CTA ---------------- */}
                <motion.div
                    {...fadeUp}
                    id="partner-form"
                    className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-[#101B3D] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl border-t-4 border-t-[#D8331F] overflow-hidden scroll-mt-20"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8331F]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8331F]/20 text-[#D8331F] text-xs font-mono font-bold border border-[#D8331F]/30">
                                <Sparkles className="w-3.5 h-3.5" />
                                Limited Franchise Enrollment Bonus
                            </span>
                            <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-white leading-tight">
                                Claim Your Free ₹15,000 Starter Marketing & Merch Kit Today
                            </h3>
                            <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
                                Join the AIShyp franchise partner network this month and get your custom domain setup,
                                first batch of branded packaging seal tape, storefront signage blueprints, and merchant
                                pitch decks included with zero extra charge.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    No Software Development
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    100% Margin Retention
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    Live in 7 Days
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                            <a
                                href="/contact"
                                className="w-full text-center bg-[#D8331F] hover:bg-[#b82a19] text-white font-bold font-sans text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-[#D8331F]/30 hover:shadow-2xl transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                            >
                                Apply for Franchise Hub
                            </a>
                            <a
                                href="#videos"
                                className="w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold font-sans text-sm sm:text-base px-8 py-4 rounded-xl border border-white/20 transition-all cursor-pointer"
                            >
                                Watch Demo Video
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}