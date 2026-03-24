"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-medium tracking-tighter text-blue-950">TBM</span>
            <div className="hidden md:flex gap-6 items-center">
              <Link href="/marketplace" className="text-slate-500 hover:text-blue-900 transition-colors font-light tracking-wide">Marketplace</Link>
              <Link href="/dashboard" className="text-slate-500 hover:text-blue-900 transition-colors font-light tracking-wide">Partner Hub</Link>
              <Link href="/dashboard" className="text-blue-700 border-b-2 border-blue-700 pb-1 font-light tracking-wide">Dashboard</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-blue-50/50 rounded-full transition-all duration-300">
              <span className="material-symbols-outlined text-blue-900">notifications</span>
            </button>
            <Link href="/profile" className="p-2 hover:bg-blue-50/50 rounded-full transition-all duration-300">
              <span className="material-symbols-outlined text-blue-900">account_circle</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-40 -left-10 text-[12rem] font-medium text-watermark select-none rotate-[-5deg]" style={{ color: '#c0d5ff', opacity: 0.15 }}>
          ZEN
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-10">
            {/* Profile Card */}
            <section className="glass-panel p-8 rounded-xl shadow-sm space-y-6" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-primary-fixed-dim animate-pulse" style={{ borderColor: '#c0d5ff' }}></div>
                <img alt="Executive Portrait" className="w-full h-full object-cover rounded-full p-2 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACU2nru036386ySioXytH72ei704_DokxjwlG9ghjrC2_-EDG07_Vk1vqKTK7N2OJJhV37ac_N5678fApvvDjeCSFcTBRzg6YjpoJvCfi5FwenguF3IucDnKOouIDikJFRFJzI-05p3E_gaBL2nwM200X-5Qqm1qDVMHBMX6dMpmWGillwaGeRh9ZFnkzTOdgHpXXV-CG1GsmVva1H93Z9VkyGHYqlxGwnPbS9-c9_6m-TqyNbOQdtYpWjT2DgShi7RovAUeq_bnY" />
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-light tracking-tight text-on-surface">Alexander Vance</h1>
                <p className="text-label-md text-primary tracking-widest uppercase font-medium">Strategic Architect • Series B+</p>
              </div>
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span>Geneva, Switzerland</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span>Aureus Zen Gold Partner</span>
                </div>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-md shadow-lg hover:shadow-primary/20 transition-all font-medium tracking-wide">
                Initiate Partnership
              </button>
            </section>

            {/* Expertise Matrix */}
            <section className="space-y-6">
              <h2 className="text-xl font-light tracking-tight pl-2">Signature Expertise</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-container-low p-4 rounded-lg">
                  <p className="text-[0.65rem] text-primary font-bold uppercase tracking-widest mb-1">Growth</p>
                  <p className="text-lg font-medium">94%</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg">
                  <p className="text-[0.65rem] text-primary font-bold uppercase tracking-widest mb-1">Risk Mitigation</p>
                  <p className="text-lg font-medium">88%</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[0.65rem] text-primary font-bold uppercase tracking-widest">ESG Alpha</p>
                    <span className="material-symbols-outlined text-xs">auto_awesome</span>
                  </div>
                  <p className="text-lg font-medium">72%</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg">
                  <p className="text-[0.65rem] text-primary font-bold uppercase tracking-widest mb-1">Governance</p>
                  <p className="text-lg font-medium">91%</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Compatibility Breakdown */}
            <section className="space-y-6">
              <div className="flex justify-between items-end">
                <h2 className="text-2xl font-light tracking-tight">Compatibility Breakdown</h2>
                <span className="text-xs text-outline font-medium uppercase tracking-[0.2em]">Live Analysis v4.2</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Vision Alignment */}
                <div className="md:col-span-2 glass-panel p-8 rounded-xl border border-white/20 shadow-sm relative overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-2">Vision Alignment</h3>
                    <p className="text-body-lg text-on-surface-variant font-light mb-6">High synchronicity with 'Zen Institutional' parameters. Vance prioritizes 10-year compounding over quarterly velocity.</p>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full">
                      <div className="bg-primary h-1.5 rounded-full w-[89%]"></div>
                    </div>
                    <p className="mt-2 text-xs font-bold text-primary">89% COMPATIBILITY</p>
                  </div>
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl" style={{ backgroundColor: '#d6e3ff' }}></div>
                </div>

                {/* Risk Appetite */}
                <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>shield_with_heart</span>
                    <h3 className="text-lg font-semibold">Risk Appetite</h3>
                    <p className="text-sm text-on-surface-variant font-light mt-2">Prudent-Aggressive balance.</p>
                  </div>
                  <img alt="Risk Chart" className="w-full h-16 object-cover rounded opacity-40 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBfa7105Np0Rmky7Xeu49T9zTJRRhXsjb765dbBUaoi6oRQItiwrjiL-5359Cy3jmw1D9XODTBc2Scf7djlIJc9CFc2LFTOmaRNT-86PMLpeqPmv0Dkv0j_ZRhyebxALJP3KHUH99c8MRstHqMZVP6dlT17GuV92emPsuiM4vxqN8gADB97d3_ErVAIyNclyprPzFcnKHP8FxOhHWkWtY9XdSvBBGRz-3anAb_dPuj53IfyEnrkA2tHbJBh77ex0hwFcRHvads7k" />
                </div>

                {/* Sector Synergy */}
                <div className="bg-surface-container-low p-8 rounded-xl md:col-span-3">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Sector Synergy</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <span className="text-sm font-light">FinTech</span>
                      <span className="text-xs bg-white px-2 py-1 rounded shadow-sm">Critical</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm font-light">AgriTech</span>
                      <span className="text-xs bg-white px-2 py-1 rounded shadow-sm">Moderate</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm font-light">Sustainable Energy</span>
                      <span className="text-xs bg-white px-2 py-1 rounded shadow-sm">High</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Investment DNA */}
            <section className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">Investment DNA</h2>
              <div className="bg-surface-container-low rounded-xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">Ticket Size</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Series B+</div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">Stage Focus</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10-15%</div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">Target IRR</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5-7 Yrs</div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider">Hold Period</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight">Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">description</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-on-surface">Investment Thesis</p>
                    <p className="text-xs text-on-surface-variant">Updated Jan 2024</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">download</span>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4 hover:bg-surface-container-high transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-on-surface">Accreditation</p>
                    <p className="text-xs text-on-surface-variant">Verified 2024</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">download</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg z-50 px-6 py-3 flex justify-around items-center">
        <Link href="/dashboard" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href="/matches" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
          <span className="text-[10px] font-medium">Matches</span>
        </Link>
        <Link href="/messages" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">mail</span>
          <span className="text-[10px] font-medium">Messages</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Account</span>
        </Link>
      </nav>
    </div>
  );
}