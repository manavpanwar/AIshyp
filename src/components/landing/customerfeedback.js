"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Star,
    Quote,
    Sparkles,
    ArrowRight,
    MapPin,
    Award,
    PhoneCall,
} from "lucide-react";

const CUSTOMERS = [
    {
        name: "Easyship Logistics",
        initials: "EL",
        color: "#D8331F",
        location: " Delhi NCR",
        // person: "Rohit Sengupta",
        // role: "Managing Director",
        category: "Courier Aggregator",
        metricValue: "120k+ Orders/mo",
        metricLabel: "100% Margin Retention",
        featureBadge: "Custom Rate Cards & Wallets",
        rating: 5,
        feedback:
            "Switching to AI Shyp transformed our aggregator business. Managing customer-specific rate cards and automated prepaid wallet deductions has completely eliminated credit risk. Our merchants love the instant UPI wallet recharge and 4x6 thermal label batch printing!",
    },
    {
        name: "NexShip Express",
        initials: "NE",
        color: "#059669",
        location: "Chennai",
        // person: "Chirag Patel",
        // role: "Co-Founder & COO",
        category: "Franchise & 3PL Network",
        metricValue: "-38% RTO Drop",
        metricLabel: "₹3.5L Reverse Freight Saved",
        featureBadge: "WhatsApp NDR Automation",
        rating: 5,
        feedback:
            "The automated WhatsApp NDR bot rescued nearly 62% of our failed deliveries. When courier riders falsely mark 'Customer Not Available', the buyer gets an instant WhatsApp message to share landmarks or reschedule. It saved us over ₹3.5 Lakhs in the first month alone!",
    },
    {
        name: "ShypKart Solutions",
        initials: "SK",
        color: "#7C3AED",
        location: "Delhi",
        // person: "Ananya Deshmukh",
        // role: "Head of Logistics",
        category: "D2C Fulfillment Aggregator",
        metricValue: "T+1 Daily COD",
        metricLabel: "99.4% Settlement Rate",
        featureBadge: "T+1 COD Remittance & Invoices",
        rating: 5,
        feedback:
            "Before AI Shyp, COD reconciliation took our finance team two weeks of manual Excel matching. With automated T+1 daily remittances and instant GST invoice generation, our cash flow predictability is rock solid. Deduction audits caught ₹1.8L in disputed penalties!",
    },
    {
        name: "Ship2Me Courier Hub",
        initials: "S2",
        color: "#2563EB",
        location: "Delhi",
        // person: "Vikram Malhotra",
        // role: "Operations Lead",
        category: "Franchise & 3PL Network",
        metricValue: "85% Faster Manifest",
        metricLabel: "14+ Courier APIs",
        featureBadge: "Manual Docket Barcode Scanning",
        rating: 5,
        feedback:
            "The manual docket barcode scanner gun integration is a complete game-changer. Our warehouse floor staff manifest 800+ packages in under 10 minutes with zero clerical typos. Having Delhivery, DTDC, BlueDart, and Xpressbees in a single console is seamless.",
    },
    {
        name: "4Murti Logistics",
        initials: "4M",
        color: "#DB2777",
        location: "Delhi",
        // person: "Harish Sharma",
        // role: "Founder & CEO",
        category: "Courier Aggregator",
        metricValue: "88% Win Rate",
        metricLabel: "Weight Disputes Recovered",
        featureBadge: "Weight Disputes & Scale Sync",
        rating: 5,
        feedback:
            "Courier weight discrepancies were draining 3% of our revenue every month. AI Shyp's weight dispute portal lets us capture digital scale photos during packing and auto-files disputes within the 48-hour carrier window. We recover almost every single unfair weight deduction now!",
    },
    {
        name: "MTDExpress",
        initials: "MT",
        color: "#EA580C",
        location: "Delhi",
        // person: "Aditya Nair",
        // role: "Chief Operating Officer",
        category: "D2C Fulfillment Aggregator",
        metricValue: "21.4% Freight Saved",
        metricLabel: "Smart Zone Arbitrage",
        featureBadge: "Rate Calculator & Store Sync",
        rating: 5,
        feedback:
            "The live shipping rate calculator and smart volumetric sorter (CFT 4000 vs 5000) instantly point our merchants to the most economical carrier for every destination pincode. We integrated our Shopify and WooCommerce stores with 1 click, and tracking links sync back automatically.",
    },
    {
        name: "ShipDelhi Network",
        initials: "SD",
        color: "#0891B2",
        location: "Delhi NCR & Noida",
        // person: "Gaurav Verma",
        // role: "Technology Director",
        category: "Courier Aggregator",
        metricValue: "8s Address Entry",
        metricLabel: "AI OCR Photo Extraction",
        featureBadge: "AI OCR Address & Mobile App",
        rating: 5,
        feedback:
            "Our retail counter staff and social sellers rave about the AI photo address capture. They simply snap a picture of handwritten customer slips, and AI OCR extracts the name, phone, address, and pincode in seconds. Pair that with the merchant mobile app, and our bookings are unstoppable!",
    },
];

const TRUST_STATS = [
    { value: "250+", label: "Active Logistics Partners", sub: "Aggregators & Franchises" },
    { value: "10M+", label: "Parcels Manifested", sub: "Across 29,000+ Pincodes" },
    { value: "4.9/5", label: "Client Satisfaction", sub: "Verified Merchant Rating" },
    { value: "100%", label: "Gross Profit Margin", sub: "Retained by Aggregators" },
];

function FeedbackCard({ customer }) {
    return (
        <article className="w-[320px] sm:w-[380px] shrink-0 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D8331F]/40 hover:shadow-xl flex flex-col justify-between group">
            {/* Top Header */}
            <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                    {/* Avatar & Client Info */}
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white shadow-sm ring-2 ring-white"
                            style={{
                                backgroundColor: customer.color,
                                boxShadow: `0 8px 16px -4px ${customer.color}40`,
                            }}
                        >
                            {customer.initials}
                        </div>

                        <div className="space-y-0.5">
                            <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#D8331F] transition-colors">
                                {customer.name}
                            </h3>
                            <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                                <span>{customer.location}</span>
                            </p>
                        </div>
                    </div>

                    {/* Quotation Icon */}
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                        <Quote className="w-4 h-4 text-[#D8331F]" />
                    </div>
                </div>

                {/* Feature Badge & Rating */}
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-slate-100 text-slate-700 border border-slate-200/60 truncate max-w-[190px]">
                        {customer.featureBadge}
                    </span>

                    <div className="flex items-center gap-0.5 shrink-0" aria-label="5 Star Rating">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                        ))}
                    </div>
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium italic pt-1">
                    &ldquo;{customer.feedback}&rdquo;
                </p>
            </div>

            {/* Bottom Footer Details */}
            <div className="mt-5 pt-4 border-t border-slate-100/90 flex items-center justify-between gap-3">
                {/* Person details */}
                <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {customer.person}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                        {customer.role}
                    </p>
                </div>

                {/* Metric Highlight Pill */}
                <div className="text-right bg-red-50/80 border border-red-100/80 rounded-xl px-2.5 py-1 shrink-0">
                    <span className="text-xs font-mono font-extrabold text-[#D8331F] block leading-tight">
                        {customer.metricValue}
                    </span>
                    <span className="text-[9px] text-slate-500 font-medium block">
                        {customer.metricLabel}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default function CustomerFeedback() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Courier Aggregator", "Franchise & 3PL Network", "D2C Fulfillment Aggregator"];

    const filteredCustomers = useMemo(() => {
        if (selectedCategory === "All") return CUSTOMERS;
        return CUSTOMERS.filter((c) => c.category === selectedCategory);
    }, [selectedCategory]);

    const carouselItems = [...filteredCustomers, ...filteredCustomers, ...filteredCustomers];

    return (
        <section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-[#F8FAFC] via-white to-slate-50 py-16 sm:py-24">
            {/* Background Subtle Grid Accents */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 space-y-12">
                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] shadow-2xs">
                        <Sparkles className="h-3.5 w-3.5 text-[#D8331F]" />
                        <span>Trusted by Courier Aggregators &amp; Logistics Franchises</span>
                    </div>

                    <h2 className="font-sans font-extrabold text-slate-950 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.14]">
                        Our Customers.
                        <span className="text-[#D8331F]">Their Real Experience.</span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                        Hear how regional courier aggregators, franchise networks, and multi-channel shippers scale operations with our white-label logistics operating system.
                    </p>
                </div>

                {/* ── 4 TRUST STATS BAR ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
                    {TRUST_STATS.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center shadow-2xs hover:border-slate-300 transition-colors"
                        >
                            <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8331F] block">
                                {stat.value}
                            </span>
                            <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                                {stat.label}
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium block">
                                {stat.sub}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ── CATEGORY PILLS FILTER ── */}
                <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {categories.map((cat) => {
                        const isSelected = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${isSelected
                                    ? "bg-[#D8331F] text-white shadow-sm shadow-red-500/20 scale-105"
                                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                                    }`}
                            >
                                {cat === "All" ? "All Client Stories" : cat}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── INFINITE MARQUEE CAROUSEL ── */}
            <div
                className="relative overflow-hidden mt-8 py-4"
                aria-label="Customer feedback carousel"
            >
                {/* Left and right fade gradient masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent" />

                <motion.div
                    className="flex w-max gap-6 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            duration: 48,
                            ease: "linear",
                            repeat: Infinity,
                        },
                    }}
                    whileHover={{ animationPlayState: "paused" }}
                    style={{ willChange: "transform" }}
                >
                    {carouselItems.map((customer, index) => (
                        <FeedbackCard
                            key={`${customer.name}-${index}`}
                            customer={customer}
                        />
                    ))}
                </motion.div>
            </div>

            {/* ── BOTTOM CONVERSION CTA BANNER ── */}
            <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-7 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Subtle Glow Background */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#D8331F]/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="text-center md:text-left space-y-2 relative z-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-red-950/80 border border-red-800/80 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF8A6E]">
                            <Award className="w-3.5 h-3.5 text-[#D8331F]" />
                            <span>Launch Your Shipping Platform in 5 Minutes</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            Ready to automate your shipping business?
                        </h3>

                        <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-slate-400 font-medium">
                            Join 250+ courier aggregators using AI Shyp to manage 14+ carrier APIs, live tracking, NDR automation, T+1 COD reconciliation, and custom client rate cards.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D8331F] hover:bg-[#FF8A6E] px-7 py-3.5 text-xs font-extrabold text-white shadow-lg hover:scale-105 active:scale-95 transition-all text-center whitespace-nowrap"
                        >
                            <PhoneCall className="w-3.5 h-3.5" /> Book a Live Walkthrough
                        </Link>

                        <Link
                            href="/case-studies"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 text-xs font-bold text-white transition-all text-center whitespace-nowrap"
                        >
                            <span>Explore Case Studies</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
