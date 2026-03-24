"use client";

import Link from "next/link";

export default function DataRoomVDRPage() {
  const documents = {
    financials: [
      { name: "Q3_Report.pdf", size: "2.4MB" },
      { name: "Projections_2025.xlsx", size: "1.1MB" },
    ],
    legal: [
      { name: "ESG_Compliance.pdf", size: "4.5MB" },
      { name: "Articles_of_Inc.pdf", size: "0.8MB" },
    ],
  };

  const auditLogs = [
    { user: "John D.", action: "Downloaded Q3_Report.pdf", time: "2h ago" },
    { user: "Sarah L.", action: "Viewed Financials folder", time: "5h ago" },
    { user: "Mike R.", action: "Accessed VDR", time: "1d ago" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body flex">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-xl font-semibold tracking-tighter text-blue-950">TBM Thailand</span>
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/marketplace" className="text-slate-600 hover:text-blue-800 transition-colors font-lexend font-light tracking-tight">Marketplace</Link>
            <Link href="#" className="text-slate-600 hover:text-blue-800 transition-colors font-lexend font-light tracking-tight">Services</Link>
            <Link href="/data-room-vdr" className="text-blue-900 font-medium border-b-2 border-blue-900 pb-1 font-lexend tracking-tight">Deal Room</Link>
            <Link href="#" className="text-slate-600 hover:text-blue-800 transition-colors font-lexend font-light tracking-tight">About</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium text-blue-900 hover:bg-slate-50 transition-all">I Want to Sell</button>
          <button className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-xl shadow-sm hover:opacity-90 transition-all">I Want to Invest</button>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-screen w-64 bg-slate-50 p-4 space-y-2 border-r border-slate-100 fixed pt-20">
        <div className="px-4 py-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
            <div>
              <p className="text-sm font-bold text-blue-950">Aureus Concierge</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Premium Member</p>
            </div>
          </div>
        </div>
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl transition-all font-lexend text-sm font-light">
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl transition-all font-lexend text-sm font-light">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span>My Portfolio</span>
        </Link>
        <Link href="/data-room-vdr" className="flex items-center gap-3 px-4 py-3 bg-white text-blue-900 shadow-sm rounded-xl font-medium font-lexend text-sm">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
          <span>Deal Room</span>
        </Link>
        <Link href="/messages" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl transition-all font-lexend text-sm font-light">
          <span className="material-symbols-outlined">mail</span>
          <span>Messages</span>
        </Link>
        <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl transition-all font-lexend text-sm font-light">
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </Link>
        <div className="mt-auto space-y-2 pt-4 border-t border-slate-200/50">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl transition-all font-lexend text-sm font-light">
            <span className="material-symbols-outlined">help</span>
            <span>Support</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl transition-all font-lexend text-sm font-light">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-20 bg-surface-container-low p-8 ml-64">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <nav className="flex gap-2 text-[10px] uppercase tracking-[0.2em] text-outline mb-3">
              <span>Active Projects</span>
              <span>/</span>
              <span className="text-primary font-bold">Project Emerald Core</span>
            </nav>
            <h1 className="text-3xl font-light text-on-surface tracking-tight">Secure Data Room</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-lg">Confidential investment materials for the acquisition of leading renewable energy infrastructure.</p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-primary-container/30 border border-primary/10 rounded-full">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-on-primary-container">Vetted by TBM Thailand</span>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Document Repository */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-6">
            {/* Financials */}
            <div className="col-span-2 md:col-span-1 bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all group border border-outline-variant/5">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary-container/50 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-[10px] font-bold text-outline">12 FILES</span>
              </div>
              <h3 className="text-lg font-medium mb-1">Financials</h3>
              <p className="text-xs text-on-surface-variant mb-6">P&L Statements, Balance Sheets, Tax Audits.</p>
              <div className="space-y-3">
                {documents.financials.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between text-xs p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">description</span> 
                      {doc.name}
                    </span>
                    <span className="text-[9px] text-outline">{doc.size}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal & ESG */}
            <div className="col-span-2 md:col-span-1 bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all group border border-outline-variant/5">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-tertiary-container/30 rounded-lg text-tertiary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <span className="text-[10px] font-bold text-outline">8 FILES</span>
              </div>
              <h3 className="text-lg font-medium mb-1">Legal & ESG</h3>
              <p className="text-xs text-on-surface-variant mb-6">Certifications, Contracts, Compliance.</p>
              <div className="space-y-3">
                {documents.legal.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between text-xs p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified_user</span> 
                      {doc.name}
                    </span>
                    <span className="text-[9px] text-outline">{doc.size}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational & Strategy */}
            <div className="col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/5">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-light">Operational & Strategy</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Growth roadmaps and site architecture.</p>
                </div>
                <button className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">View All Documents</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center cursor-pointer hover:bg-white hover:shadow-sm transition-all">
                  <span className="material-symbols-outlined text-3xl text-slate-400 mb-3">map</span>
                  <span className="text-sm font-medium">Strategic Roadmap</span>
                  <span className="text-[10px] text-outline mt-1">PDF • Updated 2d ago</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center cursor-pointer hover:bg-white hover:shadow-sm transition-all">
                  <span className="material-symbols-outlined text-3xl text-slate-400 mb-3">inventory_2</span>
                  <span className="text-sm font-medium">Site Assets Inventory</span>
                  <span className="text-[10px] text-outline mt-1">CSV • Updated 5d ago</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center cursor-pointer hover:bg-white hover:shadow-sm transition-all">
                  <span className="material-symbols-outlined text-3xl text-slate-400 mb-3">groups</span>
                  <span className="text-sm font-medium">HR Org Chart</span>
                  <span className="text-[10px] text-outline mt-1">PNG • Updated 1w ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Audit Trail Sidebar */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/5 flex-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">visibility</span>
                <h3 className="text-sm font-bold uppercase tracking-widest">Access Log</h3>
              </div>
              <div className="space-y-4">
                {auditLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-xs font-bold text-primary">
                      {log.user.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-medium">{log.user}</p>
                      <p className="text-[10px] text-on-surface-variant">{log.action}</p>
                      <p className="text-[10px] text-outline mt-1">{log.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NDA Status */}
            <div className="bg-primary-container/20 p-6 rounded-xl border border-primary/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                <h3 className="text-sm font-bold uppercase tracking-widest">Your Access</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant">NDA Status</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant">Access Level</span>
                  <span className="text-xs font-medium">Full Documentation</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant">Valid Until</span>
                  <span className="text-xs font-medium">Dec 31, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}