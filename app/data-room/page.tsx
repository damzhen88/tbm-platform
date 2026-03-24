"use client";

import Link from "next/link";

export default function DataRoomPage() {
  const documents = [
    { name: "Executive Summary 2024", type: "PDF", size: "4.2 MB", date: "Mar 20, 2024", status: "Available" },
    { name: "Financial Projections (5-Year)", type: "XLSX", size: "1.8 MB", date: "Mar 18, 2024", status: "Available" },
    { name: "Audited Financial Statements FY23", type: "PDF", size: "12.5 MB", date: "Mar 15, 2024", status: "Available" },
    { name: "Due Diligence Checklist", type: "PDF", size: "2.1 MB", date: "Mar 10, 2024", status: "Available" },
    { name: "Legal Opinion - Corporate", type: "PDF", size: "850 KB", date: "Mar 5, 2024", status: "Locked" },
    { name: "IP Documentation", type: "PDF", size: "5.3 MB", date: "Feb 28, 2024", status: "Pending" },
  ];

  const accessLogs = [
    { user: "John D.", action: "Viewed Executive Summary", time: "2 hours ago" },
    { user: "Sarah L.", action: "Downloaded Financials", time: "5 hours ago" },
    { user: "Mike R.", action: "Accessed VDR", time: "1 day ago" },
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
          <Link href="/data-room" className="flex items-center gap-3 px-4 py-3 bg-white text-blue-900 shadow-sm rounded-lg font-medium transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">folder_special</span>
            <span className="font-['Lexend'] text-sm font-light">Data Room</span>
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
            <span className="material-symbols-outlined text-primary text-3xl">folder_special</span>
            <h1 className="text-4xl font-light tracking-tight text-on-surface">Secure Data Room</h1>
          </div>
          <p className="text-on-surface-variant font-light text-lg">Confidential document repository for verified investors.</p>
        </header>

        {/* Security Notice */}
        <div className="bg-primary-container/30 border border-primary/10 rounded-2xl p-6 mb-10 flex items-center gap-6">
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
          <div>
            <h3 className="text-sm font-semibold text-on-surface mb-1">VDR Security Active</h3>
            <p className="text-xs text-on-surface-variant">All access is logged. Watermarking enabled. NDA required for access.</p>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-surface-container-low rounded-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-on-surface">Documents</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-surface-container-lowest rounded-xl text-xs font-medium text-on-surface-variant hover:bg-surface-bright transition-colors">Filter</button>
                  <button className="px-4 py-2 bg-surface-container-lowest rounded-xl text-xs font-medium text-on-surface-variant hover:bg-surface-bright transition-colors">Sort</button>
                </div>
              </div>
              <div className="space-y-4">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-xl hover:shadow-md transition-all group">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${doc.status === 'Available' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                        <span className="material-symbols-outlined">{doc.status === 'Available' ? 'description' : 'lock'}</span>
                      </div>
                      <div>
                        <p className="font-medium text-on-surface">{doc.name}</p>
                        <p className="text-xs text-on-surface-variant">{doc.type} • {doc.size} • {doc.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${doc.status === 'Available' ? 'bg-green-100 text-green-700' : doc.status === 'Locked' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                        {doc.status}
                      </span>
                      {doc.status === 'Available' && (
                        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">download</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Access Log Sidebar */}
          <div>
            <div className="bg-surface-container-low rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-on-surface mb-6">Access Log</h3>
              <div className="space-y-6">
                {accessLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary text-xs font-bold">
                      {log.user.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-on-surface">{log.user}</p>
                      <p className="text-xs text-on-surface-variant">{log.action}</p>
                      <p className="text-[10px] text-on-surface-variant mt-1">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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