"use client";

import Link from "next/link";

export default function MatchesPage() {
  const matches = [
    { title: "Premium Restaurant", match: "92%", industry: "Food & Beverage" },
    { title: "Tech Startup", match: "87%", industry: "Technology" },
    { title: "Manufacturing", match: "78%", industry: "Manufacturing" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white/70 backdrop-blur-xl docked top-0 sticky z-50">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold text-blue-950">TBM Thailand</div>
        </div>
      </nav>
      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-light mb-8">Your Matches</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs text-green-600 font-bold">{m.match} Match</span>
                  <h3 className="text-lg font-semibold mt-1">{m.title}</h3>
                  <p className="text-sm text-slate-500">{m.industry}</p>
                </div>
                <span className="material-symbols-outlined text-primary">favorite</span>
              </div>
              <Link href="/listing/1" className="block mt-4 text-primary text-sm font-medium">View Details →</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
