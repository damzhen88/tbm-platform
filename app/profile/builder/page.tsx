"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfileBuilderPage() {
  const [selectedExpertise, setSelectedExpertise] = useState(["Venture Strategy"]);
  const [bio, setBio] = useState("");

  const expertiseCards = [
    { id: 1, title: "Venture Strategy", desc: "Growth modeling, unit economics, and market entry strategy.", icon: "strategy", selected: true },
    { id: 2, title: "Product Architecture", desc: "Systems design, technical scoping, and roadmap optimization.", icon: "architecture", selected: false },
    { id: 3, title: "Brand Identity", desc: "Narrative design, visual systems, and luxury positioning.", icon: "palette", selected: false },
    { id: 4, title: "Capital Advisory", desc: "Fundraising preparation, investor relations, and exit planning.", icon: "bar_chart", selected: false },
  ];

  const toggleExpertise = (title: string) => {
    if (selectedExpertise.includes(title)) {
      setSelectedExpertise(selectedExpertise.filter(e => e !== title));
    } else {
      setSelectedExpertise([...selectedExpertise, title]);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body text-on-surface antialiased">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-medium tracking-tighter text-blue-950">TBM</span>
            <div className="hidden md:flex gap-6 items-center">
              <Link href="/marketplace" className="text-slate-500 hover:text-blue-900 transition-colors font-light tracking-wide">Marketplace</Link>
              <Link href="/dashboard" className="text-blue-700 border-b-2 border-blue-700 pb-1 font-light tracking-wide">Partner Hub</Link>
              <Link href="/dashboard" className="text-slate-500 hover:text-blue-900 transition-colors font-light tracking-wide">Dashboard</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-blue-50/50 rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <span className="text-sm font-medium">Alex Rivera</span>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Builder Canvas */}
      <main className="pt-24 pb-12 min-h-screen px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column: Wizard Steps */}
        <div className="flex-1 max-w-3xl">
          {/* Header & Progress */}
          <header className="mb-12">
            <h1 className="text-3xl font-normal text-on-surface mb-2">Partner Profile Builder</h1>
            <p className="text-on-surface-variant font-light max-w-lg mb-8">
              Curate your professional presence within the TBM ecosystem. Complete these four steps to start matching with exclusive opportunities.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-primary transition-all duration-500"></div>
              </div>
              <span className="text-xs font-medium text-primary uppercase tracking-widest">Step 1 of 4</span>
            </div>
          </header>

          {/* Step Content */}
          <section className="space-y-10">
            {/* Step 1: Signature Expertise */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">01</span>
                Signature Expertise
              </h2>
              <p className="text-on-surface-variant text-sm mb-6">
                Select the core disciplines that define your professional value. These will drive our matching algorithm.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertiseCards.map((card) => (
                  <div 
                    key={card.id}
                    onClick={() => toggleExpertise(card.title)}
                    className={`p-5 rounded-xl transition-all duration-300 cursor-pointer group ${
                      card.selected 
                        ? 'bg-white border-2 border-primary shadow-sm' 
                        : 'bg-surface-container-low hover:bg-white border-2 border-transparent hover:border-outline-variant/30'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className={`material-symbols-outlined text-3xl ${card.selected ? 'text-primary' : 'text-secondary group-hover:text-primary transition-colors'}`}>
                        {card.icon}
                      </span>
                      <span className={`material-symbols-outlined ${card.selected ? 'text-primary' : 'text-transparent'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {card.selected ? 'check_circle' : 'add_circle'}
                      </span>
                    </div>
                    <h3 className="font-medium text-on-surface">{card.title}</h3>
                    <p className="text-xs text-on-surface-variant mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Narrative & Proof */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-sm">02</span>
                Narrative & Proof
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 block">Professional Bio</label>
                  <textarea 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-outline-variant" 
                    placeholder="Describe your unique value proposition and the problems you solve..." 
                    rows={4}
                  ></textarea>
                </div>
                <div className="p-6 border-2 border-dashed border-outline-variant/30 rounded-xl bg-surface-container-low/50 text-center group hover:bg-surface-container-low transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">cloud_upload</span>
                  <p className="text-sm font-medium">Upload Case Studies or Portfolio</p>
                  <p className="text-xs text-outline-variant mt-1">PDF or link to your best work (Max 10MB)</p>
                </div>
              </div>
            </div>

            {/* Step 3: Partnership Terms */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-sm">03</span>
                Partnership Terms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-low p-8 rounded-2xl">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Equity Target Range</label>
                      <span className="text-xs font-bold text-primary">0.5% — 2.5%</span>
                    </div>
                    <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range" defaultValue={25} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Weekly Commitment</label>
                      <span className="text-xs font-bold text-primary">10 — 15 Hours</span>
                    </div>
                    <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range" defaultValue={50} />
                  </div>
                </div>
                <div className="flex items-center justify-center border-l border-outline-variant/20 pl-8">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary-dim text-4xl mb-2">handshake</span>
                    <p className="text-xs text-on-surface-variant italic">Terms are used for initial filtering only. Final agreements are negotiated privately.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8">
              <button className="px-8 py-3 text-secondary font-medium hover:bg-surface-container-high rounded-full transition-all">Save Draft</button>
              <button className="px-10 py-3 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-medium rounded-full shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
                Continue to Preview
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Live Preview Card */}
        <aside className="w-full md:w-96">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Live Preview
              </span>
              <button className="text-[10px] font-bold text-primary uppercase tracking-tighter hover:underline">Full Profile View</button>
            </div>

            {/* The Partner Card */}
            <div className="glass-panel border border-white/50 rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/5" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
              <div className="h-32 bg-primary-container relative">
                <img className="w-full h-full object-cover mix-blend-overlay opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5vX_XJ9rV3yH7vrZ4YdqKt_oH9-7FV5lxqp0uHzs5eSD97rVdemD4yfNJY8KpijNfQRzuZVQbo2qgaDvxFin3bNJ666RoXyC6lE29atw-MrBTJ-VuaSne_7wK47_5IWx7hDbouYbq9_mM6Az2XQ4MQ5pso4wtTKoxbkuMHtDo0hzgy_mIbn0m2ZC1zFmqgXQ2Tsd5jSS2B-QLYnnn9WCTTz_MOzP6m8h7N1_ud6tvn-dX-7OkwpkQgaj7NVwELeZ8WASjzPt9X6k" alt="Background" />
                <div className="absolute -bottom-10 left-8">
                  <div className="w-20 h-20 rounded-2xl border-4 border-white overflow-hidden shadow-lg">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvHlt0hMT4Z6q3Xo8DaJpA5O7zm73J7hcGCvcnNLaDQjG5tbJJ4dEIQy4egmUB67lbruYzFhb2c_kQ7dOVTLhyBgIw8P_lmT4wpmuwQmB5AaNm4Ok9FCHiVbJVLmUlcOqJLTCIHAg67PaYhhR7s5LpxciNDfT5oBuCJNxHcy0ECvRFguKLa1zO0VfYk7meFNPm4gbsVRyiRt3-H245okgGt1Y7Cr1dnPr3JZMtcNZHpyHqrEmMR-bDkgaM3d15hHRIxp21gMzhtNA" alt="Profile" />
                  </div>
                </div>
              </div>
              <div className="px-8 pt-14 pb-8">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-on-surface">Alex Rivera</h3>
                  <p className="text-sm text-primary font-medium">Strategic Operations Partner</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-surface-container text-[10px] font-bold text-on-surface-variant rounded-full uppercase tracking-wider">Strategy</span>
                  <span className="px-3 py-1 bg-primary/10 text-[10px] font-bold text-primary rounded-full uppercase tracking-wider">Architecture</span>
                </div>
                <div className="space-y-4 border-t border-outline-variant/10 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">work</span>
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold leading-none">Past Success</p>
                      <p className="text-xs font-medium">Ex-Stripe, Lead Op. (Series C)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">schedule</span>
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold leading-none">Availability</p>
                      <p className="text-xs font-medium">10-15 hrs / week</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold leading-none">Equity Floor</p>
                      <p className="text-xs font-medium">0.5% Minimum</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="w-full py-3 bg-on-surface text-surface rounded-xl font-medium text-sm hover:bg-primary transition-colors">Request Introduction</button>
                </div>
              </div>
            </div>

            {/* Guidance Note */}
            <div className="mt-6 p-4 rounded-xl bg-surface-container-high/50 flex gap-3">
              <span className="material-symbols-outlined text-primary text-xl">lightbulb</span>
              <p className="text-[11px] leading-relaxed text-on-surface-variant">
                Profiles with more than 3 skill tags tend to receive 40% more interaction from founders. Consider adding specific tools or frameworks.
              </p>
            </div>
          </div>
        </aside>
      </main>

      {/* Concierge HUD */}
      <div className="fixed bottom-6 right-6 z-40 glass-panel border border-white/50 rounded-full px-6 py-3 shadow-xl flex items-center gap-6" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="material-symbols-outlined text-primary text-sm">chat</span>
          <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Advisor</span>
        </div>
        <div className="w-px h-4 bg-outline-variant/20"></div>
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="material-symbols-outlined text-secondary text-sm">help_center</span>
          <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Help</span>
        </div>
      </div>
    </div>
  );
}