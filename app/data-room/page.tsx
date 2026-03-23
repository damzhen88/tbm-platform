"use client";

import { useState } from "react";
import Link from "next/link";

export default function DataRoomPage() {
  const [selectedFolder, setSelectedFolder] = useState("financials");
  
  const folders = [
    { id: "financials", name: "Financial Statements", count: 5 },
    { id: "legal", name: "Legal Documents", count: 3 },
    { id: "operations", name: "Operations", count: 4 },
    { id: "team", name: "Team & Management", count: 2 },
  ];

  const documents = {
    financials: [
      { name: "P&L Statements 2023-2025", type: "PDF", size: "2.4 MB" },
      { name: "Balance Sheet 2025", type: "XLSX", size: "1.1 MB" },
      { name: "Cash Flow Analysis", type: "PDF", size: "890 KB" },
    ],
    legal: [
      { name: "Certificate of Incorporation", type: "PDF", size: "450 KB" },
      { name: "Shareholder Agreement", type: "PDF", size: "1.2 MB" },
    ],
    operations: [
      { name: "Operations Manual", type: "PDF", size: "3.5 MB" },
      { name: "Supplier Contracts", type: "PDF", size: "2.1 MB" },
    ],
    team: [
      { name: "Org Chart", type: "PDF", size: "320 KB" },
      { name: "Management Team CVs", type: "PDF", size: "4.2 MB" },
    ],
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="glass-nav shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-12 py-6 flex justify-between items-center">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
          <Link href="/marketplace" className="text-sm text-on-surface-variant hover:text-primary">
            ← Back
          </Link>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-12 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
            <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
            <span>/</span>
            <span>Data Room</span>
          </div>
          <h1 className="text-3xl font-headline font-light tracking-tight text-on-surface">
            Secure Data Room
          </h1>
          <p className="text-on-surface-variant mt-2">
            Confidential documents for due diligence
          </p>
        </div>

        {/* NDA Status */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-center gap-4">
          <span className="material-symbols-outlined text-green-600">verified_user</span>
          <div className="flex-1">
            <div className="font-headline font-medium text-green-800">NDA Signed</div>
            <div className="text-sm text-green-600">You have access to all confidential documents</div>
          </div>
          <Link href="/listing/1" className="text-sm text-green-700 hover:underline">
            View Listing →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Folders */}
          <div className="lg:col-span-1">
            <div className="bg-surface-container-lowest rounded-lg border border-outline/10 overflow-hidden">
              <div className="p-4 bg-surface-container">
                <h3 className="font-headline font-medium text-on-surface">Folders</h3>
              </div>
              <div className="divide-y divide-outline/10">
                {folders.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder.id)}
                    className={`w-full p-4 flex items-center justify-between hover:bg-surface-container transition-colors ${
                      selectedFolder === folder.id ? "bg-primary/5 border-l-4 border-primary" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant">
                        folder
                      </span>
                      <span className="text-sm text-on-surface">{folder.name}</span>
                    </div>
                    <span className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">
                      {folder.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Documents */}
          <div className="lg:col-span-3">
            <div className="bg-surface-container-lowest rounded-lg border border-outline/10 overflow-hidden">
              <div className="p-4 bg-surface-container flex justify-between items-center">
                <h3 className="font-headline font-medium text-on-surface">
                  {folders.find(f => f.id === selectedFolder)?.name}
                </h3>
                <span className="text-sm text-on-surface-variant">
                  {documents[selectedFolder as keyof typeof documents]?.length || 0} files
                </span>
              </div>
              <div className="divide-y divide-outline/10">
                {documents[selectedFolder as keyof typeof documents]?.map((doc, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between hover:bg-surface-container/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">description</span>
                      <div>
                        <div className="font-headline font-medium text-on-surface">{doc.name}</div>
                        <div className="text-xs text-on-surface-variant">{doc.type} • {doc.size}</div>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-sm">download</span>
                      <span className="text-sm font-label">Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4">
              <Link 
                href="/listing/1" 
                className="flex-1 bg-primary text-on-primary px-6 py-4 rounded-lg text-center font-label text-sm tracking-wider uppercase hover:bg-primary-dim transition-colors"
              >
                Submit IOI
              </Link>
              <Link 
                href="/deal-room" 
                className="flex-1 bg-surface-container text-on-surface px-6 py-4 rounded-lg text-center font-label text-sm tracking-wider uppercase hover:bg-surface-container-high transition-colors"
              >
                Enter Deal Room
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
