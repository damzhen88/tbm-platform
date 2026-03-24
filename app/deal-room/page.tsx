"use client";

import Link from "next/link";

export default function DealRoomPage() {
  const deals = [
    { id: 1, title: "EcoStream Logistics", type: "Series B", amount: "฿125M", status: "Active", participants: 8 },
    { id: 2, title: "NeoBank Siam", type: "Growth", amount: "฿450M", status: "Active", participants: 12 },
    { id: 3, title: "Oceanic Retreats", type: "Early", amount: "฿85M", status: "Pending", participants: 3 },
  ];

  const messages = [
    { from: "Kasem Bunnag", role: "Listing Director", text: "Welcome to the deal room. Let me know if you need any clarification.", time: "2h ago" },
    { from: "Somchai P.", role: "Founder", text: "Happy to answer any questions about our expansion plans.", time: "1d ago" },
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
          <Link href="/deal-room" className="flex items-center gap-3 px-4 py-3 bg-white text-blue-900 shadow-sm rounded-lg font-medium transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">handshake</span>
            <span className="font-['Lexend'] text-sm font-light">Deal Room</span>
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
            <h1 className="text-4xl font-light tracking-tight text-on-surface">Deal Room</h1>
          </div>
          <p className="text-on-surface-variant font-light text-lg">Active negotiations and deal flow management.</p>
        </header>

        {/* Active Deals */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-on-surface mb-6">Active Negotiations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-surface-container-low rounded-2xl p-8 hover:shadow-xl transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${deal.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {deal.status}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_forward</span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">{deal.title}</h3>
                <p className="text-sm text-on-surface-variant mb-4">{deal.type}</p>
                <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">Target</p>
                    <p className="text-lg font-bold text-primary">{deal.amount}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">people</span>
                    <span className="text-sm text-on-surface-variant">{deal.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages Section */}
        <div>
          <h2 className="text-xl font-semibold text-on-surface mb-6">Recent Messages</h2>
          <div className="bg-surface-container-low rounded-2xl p-8 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className="flex items-start gap-6 pb-6 border-b border-outline-variant/10 last:border-0">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">
                  {msg.from.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-on-surface">{msg.from}</p>
                      <p className="text-xs text-primary">{msg.role}</p>
                    </div>
                    <span className="text-xs text-on-surface-variant">{msg.time}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant font-light">{msg.text}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-dim transition-colors">
              View All Messages
            </button>
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