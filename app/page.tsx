"use client"

import { useState } from "react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00288e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: 'Manrope' }}>TBM PLATFORM</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/explore" className="text-gray-700 hover:text-[#00288e] font-medium">Explore</Link>
            <Link href="#" className="text-gray-700 hover:text-[#00288e] font-medium">For Investors</Link>
            <Link href="#" className="text-gray-700 hover:text-[#00288e] font-medium">For Businesses</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth" className="text-gray-700 font-medium hover:text-[#00288e]">Login</Link>
            <Link href="/auth" className="bg-[#00288e] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1e40af] transition-all">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-[#00288e] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#86f2e4]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#006a61] text-white text-[10px] font-bold tracking-[0.05em] uppercase mb-6 rounded-sm">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Thailand's #1 B2B Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'Manrope' }}>
              Where Thai Businesses <span className="text-[#86f2e4]">Meet Capital</span>
            </h1>
            
            <p className="text-[#dde1ff] text-lg leading-relaxed mb-8 max-w-lg">
              The curated marketplace connecting Thailand's high-growth enterprises with strategic investors—manually vetted, algorithmically matched.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/auth" className="bg-white text-[#00288e] px-8 py-4 rounded-xl font-bold hover:bg-[#dde1ff] transition-all flex items-center gap-2">
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link href="/explore" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                Explore Listings
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop" alt="Thai business meeting" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">verified</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Latest Match</p>
                  <p className="font-semibold text-sm">Series A → VC Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00288e]" style={{ fontFamily: 'Manrope' }}>2,400+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Verified Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00288e]" style={{ fontFamily: 'Manrope' }}>$1.2B</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Deals Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00288e]" style={{ fontFamily: 'Manrope' }}>98%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Match Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00288e]" style={{ fontFamily: 'Manrope' }}>24</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00288e] mb-4" style={{ fontFamily: 'Manrope' }}>
              Built for <span className="text-[#006a61]">Serious Deals</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">A platform designed for high-stakes business transactions—not casual browsing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="md:col-span-2 bg-[#00288e] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#86f2e4]/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#86f2e4]/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#86f2e4] text-3xl">verified_user</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Manrope' }}>Vetted Network</h3>
                <p className="text-[#dde1ff]/80 max-w-md mb-6">Every business and investor passes our rigorous verification—manually reviewed by our analyst team.</p>
                <Link href="#" className="text-[#86f2e4] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn about verification <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#00288e]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#00288e] text-2xl">bolt</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Manrope' }}>Smart Matching</h3>
              <p className="text-gray-500 text-sm">Our proprietary algorithm analyzes 24 industry verticals to connect the right opportunities.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#86f2e4] rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#006a61]/20 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#006a61] text-2xl">chat</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Manrope' }}>Secure Channels</h3>
              <p className="text-gray-600 text-sm">End-to-end encrypted messaging designed for sensitive board-level negotiations.</p>
            </div>

            {/* Feature 4 */}
            <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#00288e]/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#00288e] text-2xl">analytics</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Manrope' }}>Market Intelligence</h3>
                  <p className="text-gray-500 text-sm max-w-lg">Real-time analytics on Thai business trends and investor sentiment—curated for you.</p>
                </div>
                <div className="w-32 h-20 bg-gray-100 rounded-lg p-3 flex items-end gap-1">
                  <div className="flex-1 bg-[#00288e]/30 rounded-sm" style={{ height: '40%' }}></div>
                  <div className="flex-1 bg-[#00288e]/30 rounded-sm" style={{ height: '65%' }}></div>
                  <div className="flex-1 bg-[#00288e]/30 rounded-sm" style={{ height: '45%' }}></div>
                  <div className="flex-1 bg-[#00288e]/30 rounded-sm" style={{ height: '80%' }}></div>
                  <div className="flex-1 bg-[#00288e]/30 rounded-sm" style={{ height: '55%' }}></div>
                  <div className="flex-1 bg-[#00288e]/30 rounded-sm" style={{ height: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00288e] mb-4" style={{ fontFamily: 'Manrope' }}>
              Your Path to the <span className="text-[#006a61]">Right Deal</span>
            </h2>
            <p className="text-gray-500">A curated 4-step journey</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative">
                <div className="text-[120px] font-bold text-gray-200 -z-10 absolute top-0 left-0 -translate-y-1/2" style={{ fontFamily: 'Manrope' }}>
                  0{step}
                </div>
                <div className="pt-16">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Manrope' }}>
                    {step === 1 && 'Build Your Profile'}
                    {step === 2 && 'Explore Intelligently'}
                    {step === 3 && 'Connect Directly'}
                    {step === 4 && 'Close the Deal'}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {step === 1 && 'Submit your credentials—our team verifies every detail manually.'}
                    {step === 2 && 'Access our exclusive directory filtered by your investment criteria.'}
                    {step === 3 && 'Initiate encrypted dialogue with verified stakeholders.'}
                    {step === 4 && 'Finalize partnerships with full platform support.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Opportunities */}
      <section className="py-20 bg-[#00288e] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Manrope' }}>Live Opportunities</h2>
              <p className="text-white/60">Verified businesses seeking capital or partners</p>
            </div>
            <Link href="/explore" className="text-[#86f2e4] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All Listings <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: 'Fundraising', company: 'AgriTech Solutions', tagline: 'AI-driven crop optimization for vertical farming.', amount: '฿12M', stage: 'Series A' },
              { type: 'Business for Sale', company: 'Emerald Holdings', tagline: 'Profitable restaurant group—40% YoY growth.', amount: '฿25.5M', stage: 'Profitable' },
              { type: 'Partner', company: 'Wellness Hub', tagline: 'Seeking operational partner for medical tourism.', amount: '20%', stage: 'Seed' },
            ].map((listing, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#86f2e4]/20 text-[#86f2e4]">{listing.type}</span>
                  <span className="material-symbols-outlined text-white/40">arrow_forward</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Manrope' }}>{listing.company}</h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{listing.tagline}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider">{listing.type === 'Partner' ? 'Equity' : 'Target'}</p>
                    <p className="font-semibold text-[#86f2e4]">{listing.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/40 uppercase tracking-wider">Stage</p>
                    <p className="font-medium">{listing.stage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00288e] mb-6" style={{ fontFamily: 'Manrope' }}>
            Ready to <span className="text-[#006a61]">Transform</span><br/>Your Business?
          </h2>
          <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto">
            Join 2,400+ Thai businesses and investors already connected through TBM.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/auth" className="bg-[#00288e] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e40af] transition-all">
              Create Free Account
            </Link>
            <Link href="#" className="border-2 border-[#00288e] text-[#00288e] px-8 py-4 rounded-xl font-semibold hover:bg-[#00288e] hover:text-white transition-all">
              Schedule a Call
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400">No credit card required • Verified listings only</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#86f2e4] rounded-lg flex items-center justify-center">
                  <span className="text-[#00288e] font-bold text-lg">T</span>
                </div>
                <span className="font-bold text-xl" style={{ fontFamily: 'Manrope' }}>TBM PLATFORM</span>
              </div>
              <p className="text-white/60 text-sm">Thailand's premier B2B matching platform.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link href="/explore" className="hover:text-white transition-colors">Explore</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Verification</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">© 2026 TBM Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
