"use client"
import { useState } from "react"
import { toast } from "react-hot-toast"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = async (event) => {
    event.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail) {
      toast.error("Please enter your email.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      })

      const data = await response.json()
      if (!response.ok) {
        toast.error(data?.error || "Subscription failed. Please try again.")
        return
      }

      toast.success(data?.message || "Subscribed successfully.")
      setEmail("")
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const links = {
    Company: [
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
    ],
    "SaaS Platform": [
      { label: "White-Label Setup", href: "/features" },
      { label: "Franchise OS", href: "/features" },
      { label: "Courier APIs", href: "/features" },
      { label: "Merchant Portal", href: "/features" },
    ],
    Support: [
      { label: "SaaS Pricing", href: "/pricing" },
      { label: "Book Demo", href: "/contact" },
      { label: "FAQs", href: "/pricing" },
      { label: "Terms & Policy", href: "/contact" },
    ],
  }

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohitpanwar2111/",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ]

  const stats = [
    { num: "100%", label: "White-Label SaaS" },
    { num: "14+", label: "Courier APIs" },
    { num: "0%", label: "Commission Split" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 text-slate-700 font-sans">
      <div className="relative z-10">
        {/* ── NEWSLETTER ── */}
        <div className="border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-12 text-center">
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Stay updated with AIShyp SaaS</p>
            <p className="text-slate-600 text-sm mt-2">Get franchise software updates, feature releases & SaaS news.</p>
            <form onSubmit={handleSubscribe} className="mt-6 w-full">
              <div className="flex items-center justify-center gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="w-full max-w-sm px-4 py-2.5 rounded-full bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#D8331F] transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D8331F] hover:bg-[#FF8A6E] text-white px-6 py-2.5 rounded-full text-sm font-semibold flex-shrink-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div className="border-b border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-[#D8331F] font-mono tracking-wide">{s.num}</p>
                <p className="text-xs text-slate-500 font-mono tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN FOOTER ── */}
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative h-10 w-52 flex items-center justify-start overflow-hidden flex-shrink-0">
                <Image
                  src="/AIship1.png"
                  alt="AIShip logo"
                  fill
                  sizes="208px"
                  className="object-contain object-left scale-125 origin-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              White-label logistics software platform empowering shipping businesses, franchise owners & aggregators with custom domain setup, direct courier API integrations, and 100% margin control.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 border border-slate-300 bg-white transition-all duration-200 hover:text-[#D8331F] hover:border-[#D8331F]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold font-mono tracking-[3px] uppercase text-[#D8331F]">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500 font-mono tracking-wide">
              © {currentYear} AIShyp Logistics SaaS. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {[
                { label: "Privacy Policy", href: "/contact" },
                { label: "Terms of Use", href: "/contact" },
                { label: "Cookie Policy", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-slate-500 hover:text-slate-900 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}