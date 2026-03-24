"use client";

import Link from "next/link";

export default function PEMarketplacePage() {
  const deals = [
    { id: 1, title: "Premium Hospitality Group", type: "M&A", amount: "฿350M", equity: "35%", location: "Bangkok", sector: "Hospitality" },
    { id: 2, title: "Manufacturing Tech Platform", type: "Growth", amount: "฿180M", equity: "22%", location: "Chonburi", sector: "Manufacturing" },
    { id: 3, title: "Renewable Energy Portfolio", type: "M&A", amount: "฿520M", equity: "40%", location: "Rayong", sector: "Energy" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* TopNavBar */}
      <header className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">TBM Thailand</div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/marketplace" className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold">Marketplace</Link>
            <Link href="/pe-marketplace" className="text-blue-900 border-b-2 border-blue-900 pb-1 font-label text-xs uppercase tracking-widest font-semibold">PE/Private Equity</Link>
            <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold">Valuation</a>
            <a href="#" className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold">Concierge</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-slate-600 font-label text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors">Login</Link>
            <Link href="/auth" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-5 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold shadow-sm hover:translate-y-[-1px] transition-all">Get Verified</Link>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
            <h1 className="text-4xl font-light tracking-tight text-on-surface">Private Equity Marketplace</h1>
          </div>
          <p className="text-on-surface-variant font-light text-lg max-w-2xl">
            Institutional-grade private equity opportunities. Exclusive access to control-level transactions and buyout opportunities in Thailand and Southeast Asia.
          </p>
        </header>

        {/* Filters */}
        <div className="bg-surface-container-low rounded-2xl p-6 mb-12">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 bg-surface-container-lowest rounded-xl text-sm border border-outline-variant/20">
              <option>All Transaction Types</option>
              <option>M&A</option>
              <option>Growth</option>
              <option>Buyout</option>
            </select>
            <select className="px-4 py-2 bg-surface-container-lowest rounded-xl text-sm border border-outline-variant/20">
              <option>All Sectors</option>
              <option>Hospitality</option>
              <option>Manufacturing</option>
              <option>Energy</option>
              <option>Technology</option>
            </select>
            <select className="px-4 py-2 bg-surface-container-lowest rounded-xl text-sm border border-outline-variant/20">
              <option>All Regions</option>
              <option>Bangkok</option>
              <option>Eastern Seaboard</option>
              <option>Northern</option>
            </select>
            <button className="px-6 py-2 bg-primary text-on-primary rounded-xl text-sm font-medium hover:bg-primary-dim transition-colors">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-br from-tertiary to-tertiary-dim rounded-2xl p-10 mb-12 text-on-tertiary">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 block">Institutional Access Only</span>
              <h2 className="text-3xl font-semibold mb-4">Thailand Manufacturing Buyout Fund II</h2>
              <p className="opacity-80 max-w-xl mb-6">
                ฿2.5B fund targeting control acquisitions in Thai manufacturing sector. Q2 closing.
              </p>
              <button className="bg-white text-tertiary px-8 py-3 rounded-xl font-label text-xs uppercase tracking-widest font-bold hover:scale-[1.02] transition-transform">
                Request Access
              </button>
            </div>
            <span className="material-symbols-outlined text-[120px] opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
          </div>
        </div>

        {/* Deals Grid */}
        <h2 className="text-xl font-semibold text-on-surface mb-6">Active PE Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-surface-container-low rounded-2xl p-8 hover:shadow-2xl transition-all group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">{deal.type}</span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-4">{deal.title}</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Target</p>
                  <p className="text-lg font-bold text-primary">{deal.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Equity</p>
                  <p className="text-lg font-bold text-on-surface">{deal.equity}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between text-sm text-on-surface-variant">
                <span>{deal.location}</span>
                <span>{deal.sector}</span>
              </div>
            </div>
          ))}
        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}