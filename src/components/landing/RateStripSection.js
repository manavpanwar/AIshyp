"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CARRIERS = [
  { name: "Delhivery", logo: "/delhivery.png", type: "Air & Surface API", status: "Active 🟢", latency: "64ms" },
  { name: "BlueDart", logo: "/bluedart.png", type: "Apex & Air Cargo API", status: "Active 🟢", latency: "82ms" },
  { name: "DTDC", logo: "/dtdc.png", type: "Express Courier API", status: "Active 🟢", latency: "71ms" },
  { name: "Xpressbees", logo: "/xpressbees.png", type: "Direct API Network", status: "Active 🟢", latency: "59ms" },
  { name: "Ekart", logo: "/ekart.png", type: "Pan-India Logistics", status: "Active 🟢", latency: "78ms" },
  { name: "Shadowfax", logo: "/shadowfax.png", type: "Hyperlocal & Surface", status: "Active 🟢", latency: "90ms" },
];

const CODE_TABS = [
  {
    id: "create-shipment",
    label: "POST /v1/shipments",
    lang: "JSON",
    code: `{
  "custom_domain": "express.yourbrand.com",
  "pickup_pincode": 110001,
  "delivery_pincode": 400001,
  "weight_kg": 1.5,
  "payment_mode": "COD",
  "cod_amount": 2499.00,
  "smart_routing": {
    "prefer": "LOWEST_COST",
    "backup": "FASTEST_SLA"
  }
}`,
    response: `{
  "status": "SUCCESS",
  "awb": "DEL98472910IN",
  "carrier_assigned": "Delhivery Express",
  "shipping_rate": 48.50,
  "your_markup_rate": 75.00,
  "gross_margin": 26.50,
  "label_url": "https://express.yourbrand.com/labels/DEL98472910IN.pdf"
}`,
  },
  {
    id: "rate-engine",
    label: "GET /v1/rates",
    lang: "JSON",
    code: `{
  "origin": "560001",
  "destination": "110001",
  "weight_grams": 800,
  "declared_value": 1200
}`,
    response: `{
  "cheapest": { "carrier": "Xpressbees", "cost": 38.00, "sla": "2 Days" },
  "fastest": { "carrier": "BlueDart Air", "cost": 65.00, "sla": "1 Day" },
  "recommended": { "carrier": "Delhivery", "cost": 42.00, "sla": "2 Days" }
}`,
  },
  {
    id: "webhooks",
    label: "Webhooks (Live Events)",
    lang: "JSON",
    code: `{
  "event": "shipment.ndr_action_required",
  "awb": "DEL98472910IN",
  "customer_phone": "+91-9876543210",
  "reason": "CUSTOMER_UNAVAILABLE_DOORSTEP",
  "automated_action": "WHATSAPP_CONFIRMATION_SENT"
}`,
    response: `{
  "webhook_status": "DELIVERED_200_OK",
  "retry_count": 0,
  "latency": "42ms"
}`,
  },
];

export default function RateStripSection() {
  const [activeTab, setActiveTab] = useState(CODE_TABS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(activeTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-12 sm:py-14 px-6 sm:px-10 lg:px-12 bg-[#FAFAFC] text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <p className="text-xs font-mono font-bold tracking-widest text-[#D8331F] uppercase">
            // Developer & Integration Infrastructure
          </p>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
            Direct Carrier APIs & Webhooks. <span className="text-[#D8331F]">Built for Scale.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            Plug your carrier keys, trigger real-time webhooks, and automate multi-carrier label generation with sub-120ms latency.
          </p>
        </div>

        {/* Studio Grid: Carrier Matrix + Developer IDE */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Left Column (5 cols): Carrier Integration Matrix */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between font-mono text-xs border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-800 uppercase">Pre-Integrated Carrier APIs</span>
              <span className="text-emerald-700 font-extrabold text-[10px] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                ● 12+ APIs Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              {CARRIERS.map((c) => (
                <div
                  key={c.name}
                  className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#D8331F] transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-16 relative shrink-0">
                      <Image
                        src={c.logo}
                        alt={c.name}
                        fill
                        sizes="64px"
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">{c.latency}</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-xs font-sans">{c.name}</h4>
                    <p className="text-[10px] text-slate-500 truncate">{c.type}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between text-xs font-mono">
              <span className="text-slate-600 font-medium">Bring your own courier keys or use aggregated rates</span>
              <span className="text-[#D8331F] font-bold">100% Flexible</span>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Code IDE Window */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 flex flex-col font-mono text-xs">
            
            {/* IDE Header & Tabs */}
            <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                
                {/* Code Tabs */}
                <div className="flex items-center gap-1">
                  {CODE_TABS.map((tab) => {
                    const isActive = activeTab.id === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`px-2.5 py-1 rounded-lg text-[10.5px] font-bold transition-all cursor-pointer ${
                          isActive
                            ? "bg-slate-800 text-emerald-400 border border-slate-700"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="text-[10px] text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded border border-slate-700 transition-colors"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>

            {/* Code Body & Response */}
            <div className="p-4 space-y-3 bg-slate-950 text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">// Request Payload</span>
                <pre className="text-emerald-300 font-mono overflow-x-auto">{activeTab.code}</pre>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>// Live Response (200 OK • sub-100ms)</span>
                  <span className="text-emerald-400 font-mono">Status: 200 OK</span>
                </div>
                <pre className="text-sky-300 font-mono overflow-x-auto">{activeTab.response}</pre>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
