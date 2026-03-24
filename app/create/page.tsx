"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateListingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    entityName: "",
    industry: "",
    description: "",
    targetAmount: "",
    equity: "",
    location: "",
    revenue: "",
    ebitda: "",
  });

  const industries = [
    "Precision Manufacturing",
    "SaaS & Digital Infrastructure",
    "Biotech & Life Sciences",
    "Logistics & Distribution",
    "Hospitality & Tourism",
    "FinTech",
    "Energy & Sustainability",
    "Healthcare",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm shadow-blue-900/5">
        <div className="flex justify-between items-center px-12 py-6 w-full max-w-screen-2xl mx-auto">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase">Aureus Capital</div>
          <div className="hidden md:flex gap-12 items-center font-['Lexend'] font-light tracking-tight">
            <Link href="/marketplace" className="text-slate-500 hover:text-blue-900 transition-all duration-300">Marketplace</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-900 transition-all duration-300">Insights</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-900 transition-all duration-300">Concierge</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth" className="text-slate-500 hover:text-blue-900 text-sm font-label uppercase tracking-widest">Login</Link>
            <Link href="/auth" className="bg-primary hover:bg-primary-dim text-on-primary px-8 py-2 rounded-md font-label uppercase tracking-widest transition-all duration-300 shadow-sm">Inquire</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Wizard Left Content */}
        <div className="flex-1 max-w-3xl">
          {/* Stepper Indicator */}
          <div className="mb-16 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface'}`}>1</span>
              <span className={`text-xs font-label uppercase tracking-widest ${step >= 1 ? 'text-primary' : 'opacity-40'}`}>Basic Info</span>
            </div>
            <div className="w-12 h-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-3 opacity-40">
              <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center text-xs font-bold">2</span>
              <span className="text-xs font-label uppercase tracking-widest">Financials</span>
            </div>
            <div className="w-12 h-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-3 opacity-40">
              <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center text-xs font-bold">3</span>
              <span className="text-xs font-label uppercase tracking-widest">Operations</span>
            </div>
            <div className="w-12 h-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-3 opacity-40">
              <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center text-xs font-bold">4</span>
              <span className="text-xs font-label uppercase tracking-widest">Verification</span>
            </div>
          </div>

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-primary-dim mb-4">Initialize Listing</h1>
            <p className="text-on-surface-variant font-light leading-relaxed max-w-xl">
              Please provide the core identifiers for your asset. This information will form the bedrock of your confidential teaser.
            </p>
          </header>

          {/* Form Content */}
          <section className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-outline">Entity Name</label>
                <input 
                  name="entityName"
                  value={formData.entityName}
                  onChange={handleInputChange}
                  className="bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline-variant/50 transition-all outline-none" 
                  placeholder="Legal name of business" 
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-outline">Industry Sector</label>
                <select 
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-xl px-4 py-3 text-on-surface transition-all outline-none"
                >
                  <option value="">Select Industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-outline">Brief Description</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline-variant/50 transition-all outline-none resize-none" 
                placeholder="Describe your business in a few sentences..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-outline">Target Capital (THB)</label>
                <input 
                  name="targetAmount"
                  value={formData.targetAmount}
                  onChange={handleInputChange}
                  className="bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline-variant/50 transition-all outline-none" 
                  placeholder="e.g., 50000000" 
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-outline">Equity Offered (%)</label>
                <input 
                  name="equity"
                  value={formData.equity}
                  onChange={handleInputChange}
                  className="bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline-variant/50 transition-all outline-none" 
                  placeholder="e.g., 15" 
                  type="number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-outline">Primary Location</label>
                <select 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-xl px-4 py-3 text-on-surface transition-all outline-none"
                >
                  <option value="">Select Location</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Chonburi">Chonburi</option>
                  <option value="Phuket">Phuket</option>
                  <option value="Rayong">Rayong</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-outline">Annual Revenue (USD)</label>
                <input 
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleInputChange}
                  className="bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-primary/40 rounded-xl px-4 py-3 text-on-surface placeholder:text-outline-variant/50 transition-all outline-none" 
                  placeholder="e.g., 1000000" 
                  type="number"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-8 border-t border-outline-variant/20">
              <button className="px-8 py-3 text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-on-surface transition-colors">
                Save Draft
              </button>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-surface-container-low text-on-surface font-label text-xs uppercase tracking-widest rounded-xl hover:bg-surface-container transition-colors">
                  Next Step
                </button>
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                  Continue
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Help */}
        <aside className="w-full lg:w-80">
          <div className="sticky top-32 bg-surface-container-low rounded-2xl p-8 space-y-8">
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">support_agent</span>
              <h3 className="text-lg font-semibold text-on-surface mb-2">Need Assistance?</h3>
              <p className="text-sm text-on-surface-variant font-light">
                Our concierge team is available to help you complete your listing submission.
              </p>
            </div>
            <button className="w-full py-3 bg-white border border-outline-variant/20 text-on-surface font-label text-xs uppercase tracking-widest rounded-xl hover:bg-surface-container transition-colors">
              Schedule Call
            </button>
            <div className="pt-6 border-t border-outline-variant/10">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Required Documents</h4>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Business Registration
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Financial Statements
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Executive Summary
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}