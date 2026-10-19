"use client";

import React from "react";
import HeroSection from "@/components/franchise/HeroSection";
import SolutionsSection from "@/components/franchise/SolutionsSection";
import WorkflowSection from "@/components/franchise/WorkflowSection";
import FranchiseBenefitsSection from "@/components/franchise/FranchiseBenefitsSection";
import ConnectedExperienceSection from "@/components/franchise/ConnectedExperienceSection";
import KeyBenefitsSection from "@/components/franchise/KeyBenefitsSection";
import FinalCtaSection from "@/components/franchise/FinalCtaSection";
import { getBreadcrumbSchema, getSoftwareApplicationSchema } from "@/lib/seo";

export default function CourierFranchiseSolutionsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Solutions", item: "/courier-franchise-solutions" },
    { name: "Courier Franchise Solutions", item: "/courier-franchise-solutions" },
  ]);

  const softwareSchema = getSoftwareApplicationSchema();

  return (
    <main className="w-full bg-white text-slate-900 font-sans selection:bg-[#D8331F] selection:text-white">
      {/* Structured SEO Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Section 1: Hero Banner */}
      <HeroSection />


      <SolutionsSection />

      <WorkflowSection />

      <FranchiseBenefitsSection />

      <ConnectedExperienceSection />

      <KeyBenefitsSection />

      <FinalCtaSection />
    </main>
  );
}
