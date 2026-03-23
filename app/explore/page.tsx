"use client";

import Link from "next/link";

export default function ExplorePage() {
  const listings = [
    { title: "Premium Restaurant", industry: "Food & Beverage", valuation: "฿85M" },
    { title: "Tech Startup", industry: "Technology", valuation: "฿120M" },
    { title: "Manufacturing", industry: "Manufacturing", valuation: "฿200M" },
    { title: "Healthcare Platform", industry: "Healthcare", valuation: "฿150M" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">TBM Thailand</div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-blue-900 font-semibold text-xs uppercase tracking-widest">Login</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-light tracking-tight mb-8">Explore Opportunities</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.map((item, i) => (
            <Link key={i} href="/listing/1" className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-xl transition-all">
              <span className="text-xs text-primary uppercase tracking-wider font-bold">{item.industry}</span>
              <h3 className="text-lg font-semibold mt-2 mb-4">{item.title}</h3>
              <p className="text-2xl font-bold text-primary">{item.valuation}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
