"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ListingDetailPage() {
  const params = useParams();
  const listingId = params.id;

  // Mock data for the listing
  const listing = {
    title: "EcoStream Logistics Infrastructure",
    subtitle: "Scaling sustainable last-mile delivery networks across Southeast Asia through proprietary EV integration and smart-hub architecture.",
    stage: "Series A",
    verified: true,
    industry: "Green Logistics",
    location: "Bangkok, TH",
    revenue: "$4.2M USD",
    ebitda: "18.4%",
    capitalRequirement: "$12,500,000",
    preMoneyValuation: "$48.0M",
    equityOffered: "20.6%",
    useOfFunds: [
      { label: "Infrastructure", percent: 45 },
      { label: "Tech Stack", percent: 25 },
      { label: "Market Ops", percent: 20 },
      { label: "Working Capital", percent: 10 },
    ],
    team: [
      { name: "Somchai Pra-ert", role: "Founder & CEO", bio: "Former Logistics Director at regional unicorn with 15+ years in supply chain optimization.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZmfLj7Q3piz1rJNr7rv6IJGj1umVqRBz3cDefhkmlKSdhJVJQZO-Ucn7GdGivYmd7AKnCcm57Dz9ib9790_gYK55io1Ak47KYgM8B6Q9WA7X6cwWjnsbu8cpaQ3wtKT11QjjEPiHb89SKVs9L2XDim5sXaqm5WCcS7jmFGF2Mz7-L_5HWn0zZPXAazGUCf2BR5i2-Tt9E-ltSxBnfKJM47wcRSoZ3J6-fVcjILgtvEO80jMUGLQAmjQp0i-vsGJ_ft-GldxVM7CA" },
      { name: "Dr. Ananya Srisai", role: "Chief Financial Officer", bio: "PhD in Economics from LSE. Ex-Goldman Sachs M&A Lead for Southeast Asia.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW-UvhSHXa7e-6VmiTG2T5J9Z5CFlxLfVoSJyUlkPCwM4PCtmEJMHEz-2oOsXtM9dASAFXd4E8nZGSMIcUBHNwTIfaStd4mOs1v5gQw01mFL3df7qtkUU4OBBMUHNOzCaaln7XrdwHcc8ZyEU7T2zVPpxZ0PTBjpoe4G7-5z-IhxsPNbV8OLsKlYLupPykk2EqZeLkLBBgi_o1Uje8kDKLN9udSewRM8MMGmFtR3b6u1bldXwJqT_lfrKhXRn0AHP1qlxEmRVZrVc" },
    ],
    documents: [
      { name: "Executive Summary 2024", type: "PDF", size: "4.2 MB", icon: "description" },
      { name: "Financial Projections (5-Year Model)", type: "XLSX", size: "1.8 MB", icon: "table_chart" },
      { name: "Audited Financial Statements FY23", type: "PDF", size: "12.5 MB", icon: "verified_user" },
    ],
    advisor: {
      name: "Kasem Bunnag",
      role: "Listing Director",
      responseTime: "< 2 Hours",
      dealsClosed: "14",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTXifi_Yrb2YLTSgviEWdUM_kIlxtkGF4i9aLdD_Jc4efyhxWPPhI-QS5V4HFa4awcDFh_ahtaxCiQpELyElS6wCZFXCZfSP5-GE8RKKDA0QHX7gjFOXACjzvK6SkhZIB3L2-p6CwcVZ2OAeeM41-BiDfPOMq7fCTTnkvjlGW6fez9NVIaa2dts2k5mzZ3qspZTwk5LPb496oJZSLhejcjgmOBhNEwPjTfgRy4_MYy2nxZX08xh7w9_SOcvtD9qRtccap8AGsBaUE",
    },
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      {/* Top Navigation Bar */}
      <nav className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">TBM Thailand</div>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/marketplace" className="text-blue-900 border-b-2 border-blue-900 pb-1 font-semibold text-xs uppercase tracking-widest">Marketplace</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-800 transition-colors text-xs uppercase tracking-widest font-semibold">Valuation</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-800 transition-colors text-xs uppercase tracking-widest font-semibold">Deal Flow</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-800 transition-colors text-xs uppercase tracking-widest font-semibold">Portfolio</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-blue-900 font-semibold text-xs uppercase tracking-widest px-4 py-2 hover:bg-blue-50/50 rounded-xl transition-all">Login</Link>
            <Link href="/auth" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold shadow-sm active:scale-95 transition-transform">Get Verified</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-2xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-16">
          {/* Header Section */}
          <section className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">{listing.stage}</span>
                  {listing.verified && (
                    <div className="flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest">Verified Listing</span>
                    </div>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-on-surface">{listing.title}</h1>
                <p className="text-lg font-light text-on-surface-variant max-w-2xl leading-relaxed">{listing.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Industry</p>
                <p className="text-on-surface font-medium">{listing.industry}</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Location</p>
                <p className="text-on-surface font-medium">{listing.location}</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Revenue (ARR)</p>
                <p className="text-on-surface font-medium">{listing.revenue}</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">EBITDA</p>
                <p className="text-on-surface font-medium">{listing.ebitda}</p>
              </div>
            </div>
          </section>

          {/* Financials Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-normal tracking-tight">Investment Summary</h2>
              <div className="h-px flex-1 bg-outline-variant/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Capital Requirement */}
              <div className="md:col-span-2 bg-primary-container/30 p-10 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container mb-4">Capital Requirement</p>
                  <h3 className="text-5xl font-medium text-on-primary-container">{listing.capitalRequirement}</h3>
                  <p className="mt-4 text-on-primary-container/70 max-w-md font-light">Seeking strategic growth capital to expand operational capacity in three new regional provinces by Q4 2024.</p>
                </div>
                <span className="absolute -right-8 -bottom-8 material-symbols-outlined text-[180px] text-primary/5" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
              </div>
              {/* Valuation */}
              <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Pre-Money Valuation</p>
                  <h3 className="text-3xl font-medium">{listing.preMoneyValuation}</h3>
                </div>
                <div className="pt-6 mt-6 border-t border-outline-variant/20">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Equity Offered</p>
                  <h3 className="text-2xl font-medium">{listing.equityOffered}</h3>
                </div>
              </div>
              {/* Use of Funds */}
              <div className="md:col-span-3 bg-surface-container-low p-8 rounded-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-6">Use of Funds Allocation</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {listing.useOfFunds.map((item, i) => (
                    <div key={i} className="space-y-3">
                      <div className="w-full bg-outline-variant/20 h-1 rounded-full overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: `${item.percent}%` }}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.label}</span>
                        <span className="text-sm font-bold text-primary">{item.percent}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-normal tracking-tight">Executive Leadership</h2>
              <div className="h-px flex-1 bg-outline-variant/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {listing.team.map((member, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <img alt={`${member.name} Portrait`} className="w-24 h-24 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src={member.image} />
                  <div>
                    <h4 className="text-lg font-semibold text-on-surface">{member.name}</h4>
                    <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">{member.role}</p>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-normal tracking-tight">Due Diligence Vault</h2>
              <div className="h-px flex-1 bg-outline-variant/20"></div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl divide-y divide-outline-variant/10">
              {listing.documents.map((doc, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-dim">{doc.icon}</span>
                    <div>
                      <p className="font-medium text-on-surface">{doc.name}</p>
                      <p className="text-xs text-on-surface-variant">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">download</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-96 space-y-8">
          {/* Profile Card */}
          <div className="sticky top-28 bg-white shadow-[0_40px_60px_-15px_rgba(43,52,55,0.06)] rounded-xl overflow-hidden border border-outline-variant/5">
            <div className="p-8 space-y-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img alt="Advisor Portrait" className="w-20 h-20 rounded-full object-cover" src={listing.advisor.image} />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-on-surface">{listing.advisor.name}</h3>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{listing.advisor.role}</p>
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-on-surface-variant">Response Time</span>
                  <span className="text-xs font-bold text-on-surface">{listing.advisor.responseTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-on-surface-variant">Deals Closed</span>
                  <span className="text-xs font-bold text-on-surface">{listing.advisor.dealsClosed}</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-xl font-label text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                Request NDA Access
              </button>
              <button className="w-full bg-surface-container-lowest text-on-surface py-4 rounded-xl font-label text-xs uppercase tracking-widest font-bold border border-outline-variant/10 hover:bg-surface-container transition-all">
                Schedule Call
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-surface-container-low rounded-xl p-6 space-y-4">
            <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Market Interest</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">Profile Views</span>
              <span className="text-sm font-bold text-on-surface">342</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">NDA Requests</span>
              <span className="text-sm font-bold text-on-surface">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">Inquiries</span>
              <span className="text-sm font-bold text-on-surface">8</span>
            </div>
          </div>
        </aside>
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
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}