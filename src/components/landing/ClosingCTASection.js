"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ClosingCTASection() {
  const containerRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top 70%",
        onEnter: () => {
          if (cubeRef.current) {
            gsap.fromTo(
              cubeRef.current,
              { scale: 0.5, rotateY: 0, rotateX: 0 },
              {
                scale: 1,
                rotateY: 360,
                rotateX: 15,
                duration: 1.4,
                ease: "back.out(1.7)",
              }
            );
          }
        },
        once: true,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-12 sm:py-16 px-4 sm:px-8 overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200 flex flex-col items-center justify-center text-center"
    >
      {/* Sleek CSS 3D Box Badge inside Dark Frame Card */}
      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl flex items-center justify-center overflow-hidden relative">
        <div
          ref={cubeRef}
          className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-[#D8331F] to-[#FF8A6E] rounded-2xl shadow-[0_0_30px_rgba(216,51,31,0.5)] flex flex-col items-center justify-center border border-white/20 transform transition-transform"
        >
          <span className="text-2xl sm:text-3xl font-extrabold text-white">📦</span>
          <span className="text-[9px] font-mono font-bold text-white/90 uppercase tracking-widest mt-1">
            AIShyp 3D
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="font-sans font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl text-center mt-5 leading-tight">
        You Build the Logistics Brand. <span className="text-[#D8331F]">We Power the Technology.</span>
      </h2>
      <p className="text-slate-600 text-xs sm:text-sm max-w-xl text-center mt-2 font-medium leading-relaxed">
        Deploy a full-featured white-label shipping aggregator platform on your custom domain in under 24 hours.
      </p>

      {/* Signup CTA Button */}
      <Link
        href="/contact"
        className="btn-red-orange text-white rounded-full px-7 py-3 font-extrabold text-xs sm:text-sm mt-5 shadow-lg inline-flex items-center gap-1.5"
      >
        Schedule Aggregator Demo →
      </Link>
    </section>
  );
}
