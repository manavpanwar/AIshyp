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
      className="relative w-full py-16 sm:py-20 px-6 sm:px-10 overflow-hidden bg-white text-slate-900 border-t border-slate-200/80 flex flex-col items-center justify-center text-center"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-gradient-to-tr from-red-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Sleek CSS 3D Box Badge inside Dark Frame Card */}
      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden relative">
        <div
          ref={cubeRef}
          className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-[#D8331F] to-[#FF8A6E] rounded-2xl shadow-[0_0_35px_rgba(216,51,31,0.55)] flex flex-col items-center justify-center border border-white/25 transform transition-transform"
        >
          <span className="text-2xl sm:text-3xl font-extrabold text-white">📦</span>
          <span className="text-[9px]  font-bold text-white/90 uppercase tracking-widest mt-1">
            AI Shyp 3D
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="font-sans font-extrabold text-slate-950 text-3xl sm:text-4xl md:text-5xl text-center mt-7 leading-tight tracking-tight max-w-3xl">
        You Build the Logistics Brand.{" "}
        <span className="bg-red bg-clip-text text-transparent">
          We Power the Technology.
        </span>
      </h2>
      <p className="text-slate-600 text-sm sm:text-base max-w-xl text-center mt-3 font-normal leading-relaxed">
        Deploy a full-featured white-label shipping aggregator platform on your custom domain in under 24 hours.
      </p>

      {/* Signup CTA Button */}
      <Link
        href="/contact"
        className="bg-[#D8331F] hover:bg-[#c02816] text-white rounded-full px-8 py-3.5 font-extrabold text-xs sm:text-sm mt-6 shadow-[0_8px_25px_rgba(216,51,31,0.35)] hover:shadow-[0_12px_30px_rgba(216,51,31,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2"
      >
        <span>Schedule Aggregator Demo</span>
        <span>→</span>
      </Link>
    </section>
  );
}
