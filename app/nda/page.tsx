"use client";

import Link from "next/link";

export default function NDAPage() {
  const activeNDAs = [
    { id: 1, listing: "EcoStream Logistics", status: "Active", signedDate: "Mar 15, 2024", expiresDate: "Mar 15, 2025" },
    { id: 2, listing: "NeoBank Siam", status: "Active", signedDate: "Mar 10, 2024", expiresDate: "Mar 10, 2025" },
    { id: 3, listing: "Premium Restaurant - Sukhumvit", status: "Pending", signedDate: "-", expiresDate: "-" },
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
          <Link href="/nda" className="flex items-center gap-3 px-4 py-3 bg-white text-blue-900 shadow-sm rounded-lg font-medium transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-['Lexend'] text-sm font-light">NDA Access</span>
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
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            <h1 className="text-4xl font-light tracking-tight text-on-surface">NDA Access Gate</h1>
          </div>
          <p className="text-on-surface-variant font-light text-lg">Manage your confidentiality agreements.</p>
        </header>

        {/* NDA Info Banner */}
        <div className="bg-tertiary-container/50 rounded-2xl p-8 mb-12 flex items-start gap-6">
          <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
          <div>
            <h3 className="text-lg font-semibold text-on-surface mb-2">Confidentiality Agreements</h3>
            <p className="text-on-surface-variant font-light">
              All NDAs are digitally executed and legally binding under Thai law. Each agreement grants access to detailed deal information, financial documents, and direct communication with listing owners.
            </p>
          </div>
        </div>

        {/* NDA List */}
        <div>
          <h2 className="text-xl font-semibold text-on-surface mb-6">Your NDA Agreements</h2>
          <div className="space-y-4">
            {activeNDAs.map((nda) => (
              <div key={nda.id} className="bg-surface-container-low rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${nda.status === 'Active' ? 'bg-green-100 text-green-700' : nda.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                      <span className="material-symbols-outlined">{nda.status === 'Active' ? 'check_circle' : 'pending'}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-on-surface">{nda.listing}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${nda.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {nda.status}
                        </span>
                      </div>
                      <div className="flex gap-6 text-sm text-on-surface-variant">
                        {nda.status === 'Active' ? (
                          <>
                            <span>Signed: {nda.signedDate}</span>
                            <span>Expires: {nda.expiresDate}</span>
                          </>
                        ) : (
                          <span>Pending signature</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {nda.status === 'Active' && (
                      <>
                        <button className="px-6 py-3 bg-surface-container-lowest text-on-surface rounded-xl font-label text-xs uppercase tracking-widest font-medium hover:bg-surface-bright transition-colors border border-outline-variant/10">
                          View PDF
                        </button>
                        <Link href={`/listing/${nda.id}`} className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-dim transition-colors">
                          Access Data
                        </Link>
                      </>
                    )}
                    {nda.status === 'Pending' && (
                      <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-dim transition-colors">
                        Sign Now
                      </button>
                    )}
                  </div>
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