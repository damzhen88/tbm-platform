"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LandingPage() {
  const [stats, setStats] = useState({
    businesses: 500,
    investors: 200,
  });

  // Fetch real stats from Supabase
  useEffect(() => {
    async function fetchStats() {
      try {
        // Get count of listings (businesses)
        const { count: businessCount } = await supabase
          .from("listings")
          .select("*", { count: "exact", head: true })
          .eq("status", "active");

        // Get count of investors (users with role INVESTOR)
        const { count: investorCount } = await supabase
          .from("users")
          .select("*", { count: "exact", head: true })
          .eq("role", "INVESTOR");

        if (businessCount !== null) {
          setStats((prev) => ({ ...prev, businesses: businessCount || 0 }));
        }
        if (investorCount !== null) {
          setStats((prev) => ({ ...prev, investors: investorCount || 0 }));
        }
      } catch (error) {
        console.log("Using default stats");
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-fixed-dim">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-blue-900/5 transition-all duration-300">
        <div className="flex justify-between items-center px-12 py-6 w-full max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-12 font-Lexend font-light tracking-tight">
            <Link href="/marketplace" className="text-blue-700 border-b-2 border-blue-700 pb-1">
              Marketplace
            </Link>
            <a href="#" className="text-slate-500 hover:text-blue-900 transition-all">
              Insights
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-900 transition-all">
              Concierge
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link
              href="/auth"
              className="text-slate-500 font-label text-xs tracking-widest uppercase hover:text-primary transition-colors"
            >
              Login
            </Link>
            <button className="milled-button text-on-primary px-8 py-3 rounded-md font-label text-xs tracking-widest uppercase shadow-lg shadow-primary/20 hover:scale-95 duration-200">
              Inquire
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-12 lg:px-24 overflow-hidden">
          {/* Background */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-surface-container-low asymmetric-clip -z-10">
            <div
              className="absolute inset-0 opacity-20"
              data-alt="Abstract aerial view of Bangkok cityscape"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRAtIuRoG9Qk8KD7NTdfodFWQUjiuDDkbMEjIDE1iMjfRfXK7czWIGtAQ2Yepoql42VJZ8yIrSOyu-r68PQQpWWVTu_qZZP1CTjnD52_QM7ynj-vdEsBexLpSsz8REbyUuqWI1_Ss2beshnjUpF7zFYcKUY1X48MpdbJTsZpL0loF1b2piv8IYU3Mre14oWntKsDwCbJ5OuIdZ2752Tu8bh5gGQVmbQZ4NKze1sZZzdp9ydHeIpvtC-2bx3xr3GX0b-mbaxxRis8w')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="max-w-4xl space-y-12">
            {/* Label */}
            <div className="space-y-4">
              <span className="label-md text-primary tracking-[0.3em] uppercase font-medium">
                Strategic Acquisitions
              </span>
              <h1 className="text-6xl md:text-8xl font-headline font-light leading-[1.1] tracking-tighter text-on-surface">
                Boutique Business <br />
                <span className="text-primary-dim italic font-normal">Matching</span> In Thailand.
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              Facilitating elite transitions between visionary founders and sophisticated global
              capital. Experience the Zurich-standard digital concierge for the Thai market.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link
                href="/create"
                className="group flex items-center gap-4 milled-button text-on-primary px-10 py-5 rounded-md font-label text-sm tracking-widest uppercase shadow-xl shadow-primary/25"
              >
                I Want to Sell
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/marketplace"
                className="flex items-center gap-4 bg-surface-container-highest text-on-surface px-10 py-5 rounded-md font-label text-sm tracking-widest uppercase hover:bg-surface-bright transition-all"
              >
                I Want to Invest
              </Link>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute bottom-10 right-10 select-none pointer-events-none">
            <span className="text-[12rem] font-headline font-bold text-primary-fixed-dim/20 leading-none">
              TBM
            </span>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface-container-low py-32 px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-light tracking-tight text-on-surface">
                The Premier Ecosystem <br />
                for Institutional Growth
              </h2>
              <p className="text-on-surface-variant font-light text-lg">
                Our curated approach ensures that every match is not just a transaction, but a
                strategic alignment of values and vision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-2 border-l-2 border-primary/20 pl-8">
                <div className="text-5xl font-headline font-medium text-primary tracking-tighter">
                  {stats.businesses}+
                </div>
                <div className="label-md text-on-surface-variant uppercase tracking-widest">
                  Verified Businesses
                </div>
              </div>
              <div className="space-y-2 border-l-2 border-primary/20 pl-8">
                <div className="text-5xl font-headline font-medium text-primary tracking-tighter">
                  {stats.investors}+
                </div>
                <div className="label-md text-on-surface-variant uppercase tracking-widest">
                  Active Investors
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 px-12 lg:px-24 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="label-md text-primary tracking-widest uppercase">
                Process Architecture
              </span>
              <h2 className="text-5xl font-headline font-light tracking-tight text-on-surface">
                How It Works
              </h2>
            </div>
            <div className="text-on-surface-variant max-w-xs font-light italic">
              "Precision-engineered phases to protect anonymity and maximize deal velocity."
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-surface-container p-10 rounded-xl space-y-24 group hover:bg-surface-container-high transition-all">
              <span className="text-6xl font-headline font-extrabold text-white/50 block">01</span>
              <div>
                <h3 className="title-md mb-2">Discovery</h3>
                <p className="text-on-surface-variant font-light text-sm">
                  Onboarding via our boutique concierge interface to define objectives.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-high p-10 rounded-xl space-y-24 group hover:bg-surface-bright transition-all">
              <span className="text-6xl font-headline font-extrabold text-white/80 block">02</span>
              <div>
                <h3 className="title-md mb-2">Verification</h3>
                <p className="text-on-surface-variant font-light text-sm">
                  Rigorous audit of business metrics and investor liquidity.
                </p>
              </div>
            </div>
            <div className="bg-surface-container p-10 rounded-xl space-y-24 group hover:bg-surface-container-high transition-all">
              <span className="text-6xl font-headline font-extrabold text-white/50 block">03</span>
              <div>
                <h3 className="title-md mb-2">Matching</h3>
                <p className="text-on-surface-variant font-light text-sm">
                  AI-driven search coupled with human advisory oversight.
                </p>
              </div>
            </div>
            <div className="bg-primary-dim p-10 rounded-xl space-y-24 text-on-primary">
              <span className="text-6xl font-headline font-extrabold text-white/10 block">04</span>
              <div>
                <h3 className="title-md mb-2 text-primary-fixed">Execution</h3>
                <p className="font-light text-sm opacity-80">
                  Secure messaging and digital deal-room facilitation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-32 bg-on-surface text-surface px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-12">
              <h2 className="text-5xl font-headline font-light leading-tight">
                Elite Digital <br />
                Infrastructure
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-primary-fixed text-3xl">
                    verified_user
                  </span>
                  <div className="space-y-2">
                    <h4 className="title-md">Verified Protocols</h4>
                    <p className="text-surface-variant font-light text-sm">
                      Multi-layer KYC and business viability audits for every participant.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-primary-fixed text-3xl">
                    travel_explore
                  </span>
                  <div className="space-y-2">
                    <h4 className="title-md">Smart Search</h4>
                    <p className="text-surface-variant font-light text-sm">
                      Deep-learning filters that find matches based on latent growth potential.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-primary-fixed text-3xl">
                    chat_bubble
                  </span>
                  <div className="space-y-2">
                    <h4 className="title-md">Concierge Messaging</h4>
                    <p className="text-surface-variant font-light text-sm">
                      Encrypted, private lines directly to owners and acquisition leads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative group">
              <div className="absolute inset-0 bg-primary-dim/20 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px]">
                <img
                  alt="Professional business interaction"
                  className="w-full h-full object-cover"
                  data-alt="Two professionals in a modern glass office discussing data"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOEjQD6HG4mcdIKElloUAZ0p7JPJabW10Wm0YNgvWibcdMBJqtXQACWJ1tjBTtM5VCg01JdzNeCXhEbb-UwaVVtyLsMZGexRKSTpPP4bJH9rbgH2XN3YparwsMz_8lpL-DaiqPdVhIrjpLmY8TS9v-f_lWW1T8QDQ1_bWvqfKQygDLdCiTYf1z4SiSNC-rr6w0OBtZIVyDXtr7zM4vcY0aZAS2-rLw8juJMGnJrisGDSUAcvC7Cprzmn4-v9XfuJTXA0jtgduBB3s"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Final Outreach */}
        <section className="py-40 px-12 text-center max-w-screen-xl mx-auto">
          <div className="space-y-12">
            <h2 className="text-6xl font-headline font-light text-on-surface">
              Ready for your next <br />
              <span className="text-primary italic">Strategic Move?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
              <div className="p-12 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all group flex-1">
                <h3 className="title-md mb-4 uppercase tracking-widest text-primary">Founders</h3>
                <p className="text-on-surface-variant mb-8 font-light">
                  Confidential exit strategies and valuation services.
                </p>
                <Link
                  href="/create"
                  className="text-primary font-label text-xs tracking-widest uppercase border-b border-primary/20 pb-2 group-hover:border-primary transition-all"
                >
                  List Business
                </Link>
              </div>
              <div className="p-12 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all group flex-1">
                <h3 className="title-md mb-4 uppercase tracking-widest text-primary">Investors</h3>
                <p className="text-on-surface-variant mb-8 font-light">
                  Access to off-market high-yield Thai enterprises.
                </p>
                <Link
                  href="/marketplace"
                  className="text-primary font-label text-xs tracking-widest uppercase border-b border-primary/20 pb-2 group-hover:border-primary transition-all"
                >
                  View Deals
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Concierge HUD */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="glass-nav p-4 rounded-full shadow-2xl border border-white/20 flex items-center gap-4">
          <div className="bg-primary p-2 rounded-full text-on-primary">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              support_agent
            </span>
          </div>
          <div className="pr-4 hidden sm:block">
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant leading-none">
              Concierge
            </p>
            <p className="font-headline font-medium text-xs text-on-surface">Online Now</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-slate-100 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full max-w-screen-2xl mx-auto">
          <p className="font-Lexend text-xs font-light tracking-widest uppercase text-slate-400">
            © 2024 Aureus Capital. Boutique Digital Concierge.
          </p>
          <div className="flex gap-12 mt-8 md:mt-0 font-Lexend text-xs font-light tracking-widest uppercase text-slate-400">
            <a className="hover:text-blue-600 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-blue-600 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-blue-600 transition-colors" href="#">
              Institutional Disclosure
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
