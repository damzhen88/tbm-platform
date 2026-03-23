"use client";

import { use } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // In a real app, fetch from Supabase
  const listing = {
    id: id,
    title: "EcoStream Logistics Infrastructure",
    description: "Scaling sustainable last-mile delivery networks across Southeast Asia through proprietary EV integration and smart-hub architecture.",
    industry: "Green Logistics",
    location: "Bangkok, TH",
    revenue: "$4.2M USD",
    ebitda: "18.4%",
    capital_requirement: 12500000,
    valuation: 48000000,
    equity_offered: "20.6%",
    stage: "Series A",
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container">
      {/* Top Navigation Bar */}
      <nav className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">TBM Thailand</div>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/marketplace" className="text-blue-900 border-b-2 border-blue-900 pb-1 font-semibold text-xs uppercase tracking-widest">Marketplace</Link>
            <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors text-xs uppercase tracking-widest font-semibold">Valuation</a>
            <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors text-xs uppercase tracking-widest font-semibold">Deal Flow</a>
            <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors text-xs uppercase tracking-widest font-semibold">Portfolio</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-blue-900 font-semibold text-xs uppercase tracking-widest px-4 py-2 hover:bg-blue-50/50 rounded-xl transition-all">Login</Link>
            <Link href="/auth" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold shadow-sm active:scale-95 transition-transform">Get Verified</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-2xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* Left Content Area */}
        <div className="flex-1 space-y-16">
          {/* Header Section */}
          <section className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">{listing.stage}</span>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Verified Listing</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-on-surface">{listing.title}</h1>
                <p className="text-lg font-light text-on-surface-variant max-w-2xl leading-relaxed">{listing.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Industry</p>
                <p className="text-on-surface font-medium">{listing.industry}</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Location</p>
                <p className="text-on-surface font-medium">{listing.location}</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Revenue (ARR)</p>
                <p className="text-on-surface font-medium">{listing.revenue}</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">EBITDA</p>
                <p className="text-on-surface font-medium">{listing.ebitda}</p>
              </div>
            </div>
          </section>

          {/* Financials Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-normal tracking-tight">Investment Summary</h2>
              <div className="h-px flex-1 bg-outline-variant/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-primary-container/30 p-10 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container mb-4">Capital Requirement</p>
                  <h3 className="text-5xl font-medium text-on-primary-container">${(listing.capital_requirement / 1000000).toFixed(1)}M</h3>
                  <p className="mt-4 text-on-primary-container/70 max-w-md font-light">Seeking strategic growth capital to expand operational capacity in three new regional provinces.</p>
                </div>
                <span className="absolute -right-8 -bottom-8 material-symbols-outlined text-[180px] text-primary/5" style={{fontVariationSettings: "'FILL' 1"}}>account_balance</span>
              </div>
              <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Pre-Money Valuation</p>
                  <h3 className="text-3xl font-medium">${(listing.valuation / 1000000).toFixed(1)}M</h3>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Equity Offered</p>
                  <h3 className="text-2xl font-medium">{listing.equity_offered}</h3>
                </div>
              </div>
              <div className="md:col-span-3 bg-surface-container-low p-8 rounded-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-6">Use of Funds Allocation</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { label: "Infrastructure", percent: "45%" },
                    { label: "Tech Stack", percent: "25%" },
                    { label: "Market Ops", percent: "20%" },
                    { label: "Team", percent: "10%" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-full bg-outline-variant/20 h-1 rounded-full overflow-hidden">
                        <div className="bg-primary h-full" style={{width: item.percent}}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.label}</span>
                        <span className="text-sm font-bold text-primary">{item.percent}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar - CTA */}
        <div className="w-full md:w-80 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
            <h3 className="text-lg font-semibold mb-6">Interested in this deal?</h3>
            <Link href="/nda" className="block w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-xl text-center font-semibold text-sm uppercase tracking-widest shadow-md hover:shadow-lg transition-all mb-4">
              Request NDA Access
            </Link>
            <Link href="/data-room" className="block w-full bg-surface-container text-on-surface py-4 rounded-xl text-center font-semibold text-sm uppercase tracking-widest hover:bg-surface-container-high transition-all">
              View Data Room
            </Link>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-2">Contact Listing Agent</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">support_agent</span>
                </div>
                <div>
                  <p className="font-medium text-sm">TBM Concierge</p>
                  <p className="text-xs text-slate-500">Online Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
