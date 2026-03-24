"use client";

import Link from "next/link";

export default function MatchesPage() {
  const matches = [
    { id: 1, title: "Premium Restaurant - Sukhumvit", type: "Hospitality", valuation: "฿25M", matchScore: 95, status: "Matched" },
    { id: 2, title: "EcoStream Logistics", type: "Logistics", valuation: "฿48M", matchScore: 88, status: "Pending" },
    { id: 3, title: "Tech Startup Series A", type: "Technology", valuation: "฿15M", matchScore: 82, status: "Matched" },
  ];

  const pendingBids = [
    { listing: "Premium Restaurant - Sukhumvit", offer: "฿22M", status: "Under Review", date: "Mar 20" },
    { listing: "Tech Startup Series A", offer: "฿14M", status: "Counter Offer", date: "Mar 18" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-slate-200/50 bg-slate-50 flex flex-col p-6 space-y-8 z-50">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-blue-900">Aureus Capital</span>
          <span className="font-['Lexend'] text-sm font-light text-blue-900">Premium Concierge</span>
        </div>
        <button className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-3 rounded-xl font-medium shadow-sm transition-transform active:scale-95">
          New Request
        </button>
        <nav className="flex-1 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-['Lexend'] text-sm font-light">Dashboard</span>
          </Link>
          <Link href="/marketplace" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">account_balance</span>
            <span className="font-['Lexend'] text-sm font-light">Investments</span>
          </Link>
          <Link href="/matches" className="flex items-center gap-3 px-4 py-3 bg-white text-blue-900 shadow-sm rounded-lg font-medium transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">handshake</span>
            <span className="font-['Lexend'] text-sm font-light">Matches</span>
          </Link>
          <Link href="/messages" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">mail</span>
            <span className="font-['Lexend'] text-sm font-light">Messages</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-['Lexend'] text-sm font-light">Settings</span>
          </Link>
        </nav>
        <div className="pt-6 border-t border-slate-200 space-y-2">
          <Link href="#" className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">help</span>
            <span className="font-['Lexend'] text-sm font-light">Support</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-['Lexend'] text-sm font-light">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-10 pb-24">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
            <h1 className="text-4xl font-light tracking-tight text-on-surface">AI Match & Negotiations</h1>
          </div>
          <p className="text-on-surface-variant font-light text-lg">AI-powered matching and bid management.</p>
        </header>

        {/* Match Score Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-dim rounded-2xl p-8 mb-12 text-on-primary">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Investment Profile Match Score</h2>
              <p className="opacity-80 text-sm">Based on your preferences, criteria, and investment history</p>
            </div>
            <div className="text-6xl font-bold">92%</div>
          </div>
        </div>

        {/* Matched Opportunities */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-on-surface mb-6">Matched Opportunities</h2>
          <div className="space-y-4">
            {matches.map((match) => (
              <div key={match.id} className="bg-surface-container-low rounded-2xl p-8 flex items-center justify-between hover:shadow-xl transition-all group">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">business</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-on-surface">{match.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${match.status === 'Matched' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {match.status}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant">{match.type} • {match.valuation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Match</p>
                    <p className="text-2xl font-bold text-primary">{match.matchScore}%</p>
                  </div>
                  <Link href={`/listing/${match.id}`} className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-dim transition-colors">
                    View Deal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Bids */}
        <div>
          <h2 className="text-xl font-semibold text-on-surface mb-6">Your Bids</h2>
          <div className="bg-surface-container-low rounded-2xl p-8">
            {pendingBids.map((bid, i) => (
              <div key={i} className="flex items-center justify-between py-6 border-b border-outline-variant/10 last:border-0">
                <div>
                  <p className="font-medium text-on-surface">{bid.listing}</p>
                  <p className="text-sm text-on-surface-variant">{bid.date}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{bid.offer}</p>
                    <p className={`text-xs ${bid.status === 'Under Review' ? 'text-amber-600' : 'text-green-600'}`}>{bid.status}</p>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Concierge HUD */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-glass rounded-2xl shadow-xl border border-white/20 p-4 flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Concierge Online</span>
            <span className="text-xs font-light text-on-surface">Awaiting your instruction.</span>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}