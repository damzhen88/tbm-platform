"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Listing {
  id: string;
  title: string;
  description: string;
  industry: string;
  stage: string;
  valuation: number;
  target_amount: number;
  equity_offered: number;
  location: string;
  status: string;
  view_count: number;
  logo_url?: string;
}

export default function MarketplacePage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ type: "equity", industry: "", stage: "all", location: "" });

  useEffect(() => {
    async function fetchListings() {
      try {
        const { data } = await supabase
          .from("listings")
          .select("*")
          .eq("status", "active")
          .order("created_at", { ascending: false });
        setListings(data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchListings();
  }, []);

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) return `฿${(amount / 1000000).toFixed(0)}M`;
    return `฿${amount.toLocaleString()}`;
  };

  const featuredDeals = [
    {
      id: "1",
      title: "Ascendia Logistics",
      industry: "Supply Chain & Tech",
      stage: "Series B",
      target: 125000000,
      equity: 12.5,
      location: "Rayong, TH",
      views: 342,
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm32QLJitSj1WbIxmrh7cSUH8-OSbr-0fV8-JBNQR_4H-vsgehoybhBxXYxnbJrNfhs5MbEV03vym9nNOVJbXR91pPwTdRBgBF_uu-5wLBQwhabAO3fUnFJ1XN4pqdvhn9RrN3OPcCFN9PPfM78ISt-6_Xq3znFrMO--Qok7CBeLgMDcFfNXE1U10I9nBkOjol9iJiPy0QruSlUnz2UiJCRr4CkW1r2veEIEhgy_tGe7UY5CRHorbIczooClnHDFLD2upaL8q1I4A",
      verified: true,
    },
    {
      id: "2",
      title: "NeoBank Siam",
      industry: "FinTech",
      stage: "Growth",
      target: 450000000,
      equity: 8,
      location: "Bangkok, TH",
      views: 218,
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_jN6qSo62oM16yj51tdoqgtQq2OKM1_irucT36OEyNDOZNzCcwGsWTny4x9uxTGLzMxoGppf_YY4U9kJk7LLA40NtRpYFQcBdxduMqMHD87BbNYNHKdsoWbHLb0k9TMOrddLm90FoLeqe_qRCKhdAJ-635jSwHQE3ySULhFKQF3C4y6EDlLE-EmHBMmj_9vxLIcKG04HWO7mM8cAcFUfbvUifyWqqSOA4EOD7_lYn3OUI8USlLSQVoSLS1PaZXeAI7CmoFDGm6Zo",
      verified: false,
    },
    {
      id: "3",
      title: "Oceanic Retreats",
      industry: "Hospitality",
      stage: "Early",
      target: 85000000,
      equity: 15,
      location: "Krabi, TH",
      views: 156,
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-QiAr0Vet5Yodaj09BgT_pRMNXomjV-AZtjvNJT_4WBQ2DC0rR9orrB-1QbuieGCdy0dvofq_JVl4JIOVf1Br3gUUZOqnJWwLqHwJRpIkfRx47tvEJkHt2pi629RtjKsAoJ7Li0i2DfnNFDt7KqMpNNbhbBq16xnhVQT259I09IydVWfZO9ASzIXFHOZJ9fH4aP237BC_7F5DjkORc85NnIqlb8c4eO3N1k3HOCXfGGUbm-CSaXgC0qU6FzAW8whFYO882Hf_Mjo",
      verified: true,
    },
    {
      id: "4",
      title: "GridPulse TH",
      industry: "Energy",
      stage: "Series A",
      target: 110000000,
      equity: 10,
      location: "Chonburi, TH",
      views: 89,
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Wpbd1jm-ImiDYUbmCxxZ9xd_aFKwGTPfw9_NUPRxXOt0zXJ_GwRsa8FOS3BQPC4d971isg-EVwazX_Bd8ZOoSWrzCkXMUsAIUy61u4oVrrbHbVNRhbHOFq1xG2cZT8X2OrMRSJcL7CfBH1DEMjbJWhgyAxuGmrDzxItjlvOml3qTRiiVmWuAtjSCt2qZ19Vozm84Jd59I4uWRhi4d_BUVPOjmuikCNjCecYIwVREoPdv6LzL8H0G2RrJsvoU_vXtpTWATur7ejc",
      verified: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background font-body antialiased">
      {/* TopNavBar */}
      <header className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">TBM Thailand</div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/marketplace" className="text-blue-900 border-b-2 border-blue-900 pb-1 font-label text-xs uppercase tracking-widest font-semibold">Marketplace</Link>
            <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold">Valuation</a>
            <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold">Deal Flow</a>
            <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold">Portfolio</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-slate-600 font-label text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors">Login</Link>
            <Link href="/auth" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-5 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold shadow-sm hover:translate-y-[-1px] transition-all">Get Verified</Link>
          </div>
        </div>
      </header>

      <main className="flex min-h-screen max-w-screen-2xl mx-auto">
        {/* Filter Sidebar */}
        <aside className="w-72 hidden lg:flex flex-col p-8 gap-8 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto no-scrollbar">
          <div>
            <h2 className="text-label-md font-semibold text-on-surface-variant uppercase tracking-widest text-[10px] mb-6">Market Filters</h2>
            
            {/* Asset Type */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">Asset Type</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={filters.type === "equity"} 
                    onChange={() => setFilters({...filters, type: "equity"})} 
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20" 
                    type="checkbox"
                  />
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">Equity Deals</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox"/>
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">Debt Financing</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox"/>
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">M&A / Buyout</span>
                </label>
              </div>
            </div>

            {/* Industry */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">Industry</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-2.5 text-body-lg font-light focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                <option>All Industries</option>
                <option>FinTech</option>
                <option>Hospitality</option>
                <option>Real Estate</option>
                <option>Energy</option>
                <option>Consumer Retail</option>
              </select>
            </div>

            {/* Stage */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">Venture Stage</label>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 rounded-full bg-primary text-on-primary text-xs font-medium">Seed</button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-container-highest transition-colors">Series A</button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-container-highest transition-colors">Series B</button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-container-highest transition-colors">Growth</button>
              </div>
            </div>

            {/* Capital Range */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">Capital Required</label>
              <div className="space-y-4">
                <input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range" min="5000000" max="500000000"/>
                <div className="flex justify-between text-[10px] font-semibold text-on-surface-variant uppercase tracking-tighter">
                  <span>฿5M</span>
                  <span>฿500M+</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">Region</label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-4 h-4 border-outline-variant text-primary focus:ring-primary/20" name="loc" type="radio"/>
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">Bangkok CBD</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-4 h-4 border-outline-variant text-primary focus:ring-primary/20" name="loc" type="radio"/>
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">Eastern Seaboard</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="w-4 h-4 border-outline-variant text-primary focus:ring-primary/20" name="loc" type="radio"/>
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">Northern Region</span>
                </label>
              </div>
            </div>
          </div>
          <button className="mt-auto w-full py-3 bg-surface-container-low text-on-surface-variant font-label text-[10px] uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-surface-container-high transition-all">Clear All Filters</button>
        </aside>

        {/* Marketplace Canvas */}
        <section className="flex-1 p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl leading-tight text-on-background mb-4">
                Investment <span className="text-primary italic">Marketplace</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
                Curated institutional deal flow across Southeast Asia. Every listing is pre-vetted by Aureus Capital analysts.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-full">
              <button className="bg-surface-container-lowest shadow-sm px-6 py-2 rounded-full text-xs font-semibold text-primary">All Deals</button>
              <button className="px-6 py-2 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors">Newest</button>
              <button className="px-6 py-2 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors">Trending</button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Featured Card */}
            <div className="md:col-span-2 xl:col-span-2 group relative overflow-hidden bg-surface-container-lowest rounded-[2rem] p-8 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center overflow-hidden">
                      <img className="w-full h-full object-cover" src={featuredDeals[0].logo} alt={featuredDeals[0].title}/>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-on-surface">{featuredDeals[0].title}</h3>
                        {featuredDeals[0].verified && (
                          <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-label-md text-on-surface-variant uppercase tracking-widest">{featuredDeals[0].industry} • {featuredDeals[0].stage}</p>
                    </div>
                  </div>
                  <span className="text-display-lg font-light text-primary/20 select-none">01</span>
                </div>
                <div className="grid grid-cols-3 gap-8 mb-12">
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">Seeking</p>
                    <p className="text-headline-md text-on-surface font-semibold">{formatCurrency(featuredDeals[0].target)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">Location</p>
                    <p className="text-headline-md text-on-surface font-semibold">{featuredDeals[0].location}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">Equity</p>
                    <p className="text-headline-md text-on-surface font-semibold">{featuredDeals[0].equity}%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-8">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-surface-container overflow-hidden">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBudSchca-LhlpmL5oolwPvdvlWmk36V0uTpOLvCgiFEiim-QN4kA3qtilyuR22lI2accitjvPaP2LOIqgSyO37lpObj8THZa8tveqmdKWXxO-lJr8Q_KY9Sw7sYz3KKsmkQ9o1Pk1EeEopWIS4lBofoXPuoOFuGx_tAoPXEZPP0lS6aEgRAkbSZQ8L94kXiVYNuMfl2aathBg3IHruWvgw_zEWo7u6vP1DyX0oBFd84h4RktbmMVkJqZY7vjW9gaOKAISb4Zst6Zc" alt="Investor"/>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-surface-container overflow-hidden">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFvbanR4kYjqz6WegK6SIxe1RZ3pZh44nkls_Bi9vHEJdT5RwXQZ5OETI3tF10k69A6nGcYBvzWYu9JzM176Gx5ca1tzSxoBuaDXRnj4ZMpjr7Wa-z0QwuRQaaU1hz790XIsrVfvvVn1aFI-dx1sotvGCoPT3YxC0jUnfVx0trHL2KQOjKcGhYIDP5Ct1TFvcIUOAE-dIs-CjqqGhGUH2vxHpRT7iA88fZ0tYIzvBBQ96scmIXPKdd5FCg0Ju8YnGL9453NULHqWE" alt="Investor"/>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-primary flex items-center justify-center text-on-primary text-[10px] font-bold">
                      +12
                    </div>
                  </div>
                  <Link href="/listing/1" className="flex items-center gap-2 group/btn font-label text-xs uppercase tracking-widest font-bold text-primary">
                    View Deal Deck 
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Cards */}
            {featuredDeals.slice(1).map((deal, i) => (
              <div key={deal.id} className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col group hover:bg-surface-container-lowest transition-all hover:shadow-xl">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover" src={deal.logo} alt={deal.title}/>
                  </div>
                  <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border border-outline-variant/10">{deal.stage}</span>
                </div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-title-md font-semibold text-on-surface">{deal.title}</h4>
                    {deal.verified && <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>}
                  </div>
                  <p className="text-body-lg text-on-surface-variant font-light">{deal.industry} startup in {deal.location}.</p>
                </div>
                <div className="mt-auto pt-6 border-t border-outline-variant/10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Target</p>
                      <p className="text-title-md font-bold text-on-primary-container">{formatCurrency(deal.target)}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="md:col-span-1 xl:col-span-1 bg-gradient-to-br from-primary to-primary-dim rounded-[2rem] p-8 flex flex-col justify-between text-on-primary shadow-xl">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4">stars</span>
                <h3 className="text-headline-md font-medium leading-tight mb-4">Have a high-potential venture?</h3>
                <p className="text-body-lg opacity-80 font-light leading-relaxed">
                  List your company on TBM and connect with over 450+ verified institutional investors globally.
                </p>
              </div>
              <Link href="/create" className="bg-white text-primary w-full py-4 rounded-xl font-label text-xs uppercase tracking-widest font-bold shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
                Submit Your Pitch
              </Link>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-between py-8 border-t border-outline-variant/10">
            <p className="text-label-md text-on-surface-variant font-medium">Showing {featuredDeals.length} of {listings.length || 128} verified deals</p>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-bold text-xs">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container font-medium text-xs">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container font-medium text-xs">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Concierge HUD */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-surface/60 backdrop-blur-xl border border-outline-variant/10 p-4 rounded-2xl shadow-2xl flex items-center gap-6">
          <div className="flex items-center gap-3 pr-6 border-r border-outline-variant/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <div>
              <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest leading-none mb-1">Advisor Online</p>
              <p className="text-xs font-semibold text-on-surface">Chat with Aureus Concierge</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">help_center</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}