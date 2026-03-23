"use client";

import Link from "next/link";

export default function PEMarketplacePage() {
  const listings = [
    { title: "Premium Restaurant Chain", industry: "Food & Beverage", target: "฿85M", stage: "Series A" },
    { title: "Tech Startup Series A", industry: "Technology", target: "฿120M", stage: "Series A" },
    { title: "Manufacturing Facility", industry: "Manufacturing", target: "฿200M", stage: "Growth" },
    { title: "Healthcare Platform", industry: "Healthcare", target: "฿150M", stage: "Series B" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Header */}
      <nav className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">TBM Thailand</div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/marketplace" className="text-blue-900 border-b-2 border-blue-900 pb-1 font-semibold text-xs uppercase tracking-widest">Marketplace</Link>
            <a href="#" className="text-slate-500 hover:text-blue-800 text-xs uppercase tracking-widest font-semibold">Valuation</a>
            <a href="#" className="text-slate-500 hover:text-blue-800 text-xs uppercase tracking-widest font-semibold">Portfolio</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-slate-600 font-semibold text-xs uppercase tracking-widest">Login</Link>
            <Link href="/auth" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-5 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold shadow-sm">Get Verified</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-light tracking-tight text-on-surface mb-4">
            Private Equity <span className="text-primary italic">Marketplace</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-light">
            Institutional-grade investment opportunities for sophisticated investors.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {["All Deals", "Growth", "Buyout", "Turnaround"].map((filter, i) => (
            <button key={i} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              i === 0 ? "bg-primary text-white" : "bg-surface-container text-slate-600 hover:bg-surface-container-high"
            }`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {listings.map((listing, i) => (
            <Link key={i} href="/listing/1" className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-fixed/30"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{listing.stage}</span>
                  <span className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-primary">business</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                <p className="text-slate-500 mb-6">{listing.industry}</p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Target</p>
                    <p className="text-2xl font-bold text-primary">{listing.target}</p>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
