"use client";

import Link from "next/link";

export default function DataRoomPage() {
  const folders = [
    { id: 1, name: "Financial Statements", icon: "description", count: 5 },
    { id: 2, name: "Legal Documents", icon: "gavel", count: 3 },
    { id: 3, name: "Operations", icon: "settings", count: 4 },
    { id: 4, name: "Team & Management", icon: "groups", count: 2 },
  ];

  const files = [
    { name: "P&L Statements 2023-2025.pdf", size: "2.4 MB", type: "PDF" },
    { name: "Balance Sheet 2025.xlsx", size: "1.1 MB", type: "XLSX" },
    { name: "Cash Flow Analysis.pdf", size: "890 KB", type: "PDF" },
    { name: "Certificate of Incorporation.pdf", size: "450 KB", type: "PDF" },
    { name: "Operations Manual.pdf", size: "3.5 MB", type: "PDF" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* SideNavBar */}
      <aside className="h-full w-64 fixed left-0 top-0 bg-slate-50 flex flex-col p-6 gap-8 z-40 border-r border-slate-100">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold text-blue-900 uppercase tracking-widest font-headline">Aureus Private</span>
          <span className="font-Lexend text-xs tracking-wide uppercase text-slate-400">Elite Tier</span>
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link href="/marketplace" className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">payments</span>
            <span>Investments</span>
          </Link>
          <div className="flex items-center gap-3 p-3 bg-white text-blue-900 shadow-sm rounded-lg font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">description</span>
            <span>Documents</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">support_agent</span>
            <span>Advisor</span>
          </div>
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <button className="bg-primary hover:bg-primary-dim text-on-primary py-3 rounded-md font-label text-xs tracking-widest uppercase transition-all shadow-md">
            Concierge HUD
          </button>
          <div className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen relative p-12">
        <header className="mb-16 flex justify-between items-end">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-light font-headline tracking-tight text-on-surface mb-2">Vault & Repository</h1>
            <p className="text-on-surface-variant font-light text-lg">Secure Data Room: Project TBM High-Level Acquisition.</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">256-Bit Encrypted</span>
            </div>
          </div>
        </header>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {folders.map((folder) => (
            <div key={folder.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary">{folder.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{folder.name}</h3>
              <p className="text-sm text-slate-500">{folder.count} files</p>
            </div>
          ))}
        </div>

        {/* Files List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-8 py-4 bg-surface-container border-b border-slate-100">
            <h3 className="font-semibold">Recent Documents</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {files.map((file, i) => (
              <div key={i} className="px-8 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-slate-500">{file.type} • {file.size}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary hover:text-white transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
