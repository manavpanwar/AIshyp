"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import CleanHeroSection from "../../components/landing/CleanHeroSection";
import HeroSection from "../../components/landing/HeroSection";
import { buildFaqSchema, faqItems } from "../../data/faq";

// Lazy load below-the-fold sections to prevent dev server compilation spikes & RAM freeze on page load
const GameChangersSection = dynamic(() => import("../../components/landing/GameChangersSection"));
const BuildVsAIShypSection = dynamic(() => import("../../components/landing/BuildVsAIShypSection"));
const BusinessAdvantageSection = dynamic(() => import("../../components/landing/BusinessAdvantageSection"));
const RevenueCalculatorSection = dynamic(() => import("../../components/landing/RevenueCalculatorSection"));
const LaunchStepsSection = dynamic(() => import("../../components/landing/LaunchStepsSection"));
const LogisticsNetworkSection = dynamic(() => import("../../components/landing/LogisticsNetworkSection"));
const RateStripSection = dynamic(() => import("../../components/landing/RateStripSection"));
const ClosingCTASection = dynamic(() => import("../../components/landing/ClosingCTASection"));
const MobileLanding = dynamic(() => import("../../components/landing/MobileLanding"));
const FAQ = dynamic(() => import("../../components/FAQ"));

export default function Main() {
  const homeFaqSchema = buildFaqSchema(faqItems);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full min-h-screen bg-white text-slate-900 flex items-center justify-center font-sans">
        <div className="w-8 h-8 rounded-full border-2 border-[#D8331F] border-t-transparent animate-spin" />
      </div>
    );
  }

  const sectionRevealVariant = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="w-full min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      {isMobile ? (
        <MobileLanding />
      ) : (
        <>
          {/* Section 1: Clean Minimalist Hero Landing Screen */}
          <CleanHeroSection />

          {/* Section 2: Detailed Platform Overview & Live Dashboard Console */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <HeroSection />
          </motion.div>

          {/* Below-the-fold sections with smooth entrance scroll animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <GameChangersSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <BuildVsAIShypSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <BusinessAdvantageSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <RevenueCalculatorSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <LaunchStepsSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <LogisticsNetworkSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <RateStripSection />
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
            className="relative py-10 sm:py-12 md:py-14 px-4 sm:px-8 lg:px-12 border-t border-slate-200 bg-[#F4F6F9]"
          >
            <FAQ items={faqItems} maxItems={4} showExploreMore={true} showCta={false} />
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={sectionRevealVariant}
          >
            <ClosingCTASection />
          </motion.div>
        </>
      )}
    </main>
  );
}